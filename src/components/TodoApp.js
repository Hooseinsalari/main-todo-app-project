import React, { useState } from "react";

// components
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex items-center flex-col pt-24 content-center h-full px-2 sm:w-3/5 sm:mx-auto lg:w-5/12">
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoApp;
