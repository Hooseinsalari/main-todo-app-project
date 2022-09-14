import React from "react";

// components
import Todo from "./common/Todo";

const TodoList = ({ todos, onComplete, onDelete }) => {
  return (
    <div className="w-full mt-4 max-h-80 rounded-sm overflow-auto">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
