import React, { useState } from "react";
import TodoEdit from "./common/TodoEdit";

// components
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const completeHandler = (todo) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex((t) => t.id === todo.id);
    newTodos[index].isComplete = !newTodos[index].isComplete;
    setTodos(newTodos);
  };

  const deleteHandler = (todo) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((t) => t.id !== todo.id);
    setTodos(filteredTodos);
  };

  const editTodo = (newValue, id) => {
    const index = todos.findIndex((t) => t.id === id)
    const selectedTodo = {...todos[index]}
    selectedTodo.text = newValue
    const updateTodos = [...todos]
    updateTodos[index] = selectedTodo
    setTodos(updateTodos)
  }

  return (
    <div className="flex items-center flex-col pt-24 content-center h-full px-2 sm:w-3/5 sm:mx-auto lg:w-5/12">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        onComplete={completeHandler}
        onDelete={deleteHandler}
        onUpdateTodo={editTodo}
      />
    </div>
  );
};

export default TodoApp;
