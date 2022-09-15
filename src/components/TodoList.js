import React, { useState } from "react";

// components
import Todo from "./common/Todo";
import TodoEdit from "./common/TodoEdit";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
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
      <div className="w-full mt-4 max-h-80 rounded-sm overflow-auto">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onComplete={onComplete}
            onDelete={onDelete}
            onEdit={editHandler}
          />
        ))}
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
    </>
  );
};

export default TodoList;
