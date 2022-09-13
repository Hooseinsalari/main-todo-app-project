import React, { useState } from "react";

const TodoForm = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({
    id: Math.random(),
    text: "",
    isComplete: false,
  });

  const inputHandler = (e) => {
    setTodo({ ...todo, text: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([...todos, todo]);

    setTodo({
      id: Math.random(),
      text: "",
      isComplete: false,
    });
  };

  return (
    <div className="flex flex-col w-full bg-[#25273c] py-3 px-2 rounded-sm">
      <form
        className="flex items-center pb-2 border-b border-b-slate-500"
        onSubmit={submitHandler}
        autoComplete="off"
      >
        <button
          className="mr-3 text-slate-400 border-none outline-none"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
        <input
          className="bg-[#25273c] mt-1 rounded-md 
          text-lg font-medium border-none outline-none
           text-slate-400 w-full"
          placeholder="Add Your Todos ..."
          type="text"
          value={todo.text}
          name="todo"
          onChange={inputHandler}
        />
      </form>

      <div className="flex items-center justify-evenly pt-2">
        <button className="mx-4 text-slate-400 hover:text-slate-200 ease-in duration-150 text-base font-normal">
          All
        </button>
        <button className="mx-4 text-slate-400 hover:text-slate-200 ease-in duration-150 text-base font-normal">
          Complete
        </button>
        <button className="mx-4 text-slate-400 hover:text-slate-200 ease-in duration-150 text-base font-normal">
          Active
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
