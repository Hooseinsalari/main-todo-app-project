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

  return (
    <div className="flex items-center flex-col pt-24 content-center h-full px-2 sm:w-3/5 sm:mx-auto lg:w-5/12">
      <div className="flex items-center justify-between w-full mb-12">
        <h3 className="text-2xl text-white dark:text-slate-800">Todo App</h3>
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
      />
    </div>
  );
};

export default TodoApp;
