import React, { useEffect, useState } from "react";

// components
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoEdit from "./common/TodoEdit";
import SwitchToggle from "./common/SwitchToggle";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [status, setStatus] = useState("All");

  useEffect(() => {
    filterTodos(status);
  }, [todos, status]);

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  const completeHandler = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.id === todo.id);
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  const deleteHandler = (todo) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
  };

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  const editTodo = (newValue, id) => {
    const index = todos.findIndex((t) => t.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.text = newValue;
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  const filterTodos = (status) => {
    switch (status) {
      case "All": {
        setFilteredTodos(todos);
        break;
      }

      case "Complete": {
        setFilteredTodos(() => todos.filter((todo) => todo.isComplete));
        break;
      }

      case "Active": {
        setFilteredTodos(() => todos.filter((todo) => !todo.isComplete));
        break;
      }

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  useEffect(() => {
    const saveData = JSON.parse(localStorage.getItem("todos"));
    if (saveData) setTodos(saveData);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex items-center flex-col pt-16 pb-5 content-center h-full px-4 sm:w-2/3 sm:mx-auto lg:w-1/2">
      <div className="flex items-center justify-between w-full mb-6">
        <h3 className="text-3xl tracking-[0.6rem] text-white">TODO</h3>
        <SwitchToggle />
      </div>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList
        todos={filteredTodos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
        onUpdateTodo={editTodo}
        onUnCompletedTodo={todos.filter((todo) => !todo.isComplete).length}
      />
    </div>
  );
};

export default TodoApp;
