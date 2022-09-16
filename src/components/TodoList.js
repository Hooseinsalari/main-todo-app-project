import React, { useState } from "react";

// components
import Todo from "./common/Todo";
import TodoEdit from "./common/TodoEdit";

const TodoList = ({
  todos,
  onComplete,
  onDelete,
  onUpdateTodo,
  onUnCompletedTodo,
}) => {
  const [openEdit, setOpenEdit] = useState(false);
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isComplete: false,
  });

  const editHandler = (todo) => {
    setOpenEdit(true);
    setEdit(todo);
  };

  const submitTodo = (newValue) => {
    onUpdateTodo(newValue, edit.id);
    setOpenEdit(false);
  };

  return (
    <>
      <div className="bg-white dark:bg-[#25273c] w-full mt-4 max-h-80 rounded-sm overflow-auto shadow-hero border-none">
        {todos.length ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onComplete={onComplete}
              onDelete={onDelete}
              onEdit={editHandler}
            />
          ))
        ) : (
          <div className="bg-white dark:bg-[#25273c] py-4 px-2 text-center text-xl font-medium text-gray-600 dark:text-gray-300">
            There is Nothing
          </div>
        )}
      </div>

      <div>
        {openEdit ? (
          <TodoEdit
            addTodoHandler={submitTodo}
            edit={edit}
            setEdit={setEdit}
            openEdit={openEdit}
            setOpenEdit={setOpenEdit}
          />
        ) : null}
      </div>

      {todos.length && onUnCompletedTodo >=0 ? (
        <div className="bg-white dark:bg-[#25273c] w-full p-1 text-center border-t border-t-slate-300 dark:border-t-slate-500 shadow-hero">
          <span className="text-[17px] font-normal text-slate-600 dark:text-gray-200">
            {onUnCompletedTodo
              ? `${onUnCompletedTodo} Tasks Left`
              : "All Work was Done"}
          </span>
        </div>
      ) : null}
    </>
  );
};

export default TodoList;
