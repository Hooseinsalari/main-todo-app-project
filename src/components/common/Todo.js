import React from "react";

const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
  return (
    <div
      className={`${
        todo.isComplete ? "opacity-70" : ""
      } ease-in duration-150 py-4 px-2 flex items-start justify-between border-b border-b-slate-300 dark:border-b-slate-500 last:border-none`}
    >
      <div className="flex items-start" onClick={() => onComplete(todo.id)}>
        <button className="text-gray-800 dark:text-white border border-gray-600 rounded-full p-1 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`${
              todo.isComplete ? "visible opacity-100" : "invisible opacity-50"
            } w-4 h-4 ease-in duration-150 group-hover:visible group-hover:opacity-100`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </button>

        <span
          className={`${
            todo.isComplete ? "line-through" : ""
          } ease-in duration-150 text-lg text-slate-600 dark:text-gray-200 ml-2`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => onEdit(todo)}
          className="text-gray-600 opacity-70 hover:opacity-100 ease-in duration-150 dark:text-gray-200 mr-1.5 outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-gray-600 opacity-70 hover:opacity-100 ease-in duration-150 dark:text-gray-200 outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Todo;
