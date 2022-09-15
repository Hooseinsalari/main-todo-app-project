import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const TodoEdit = ({ addTodoHandler, edit, setEdit, openEdit, setOpenEdit }) => {
  const [text, setText] = useState(edit.text ? edit.text : "");

  const inputHandler = (e) => {
    setText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (text) {
      addTodoHandler(text);
      setText("");
    } else {
      alert("invalid");
    }
  };

  const closeModal = () => {
    setOpenEdit(false);
  };

  return (
    <>
      <Transition appear show={openEdit} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[#25273c] p-6 text-left align-middle shadow-sm transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-100 mb-4"
                  >
                    Edit Todo
                  </Dialog.Title>
                  <form
                    onSubmit={submitHandler}
                    className="flex flex-col mt-12"
                  >
                    <input
                      type="text"
                      value={text}
                      onChange={inputHandler}
                      className="outline-none border-2 text-white text-xl rounded-lg block p-2.5 bg-transparent border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      onClose={closeModal}
                      type="submit"
                      className="w-32 mx-auto mt-4 text-white focus:outline-none font-medium rounded-lg text-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-800"
                    >
                      Edit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default TodoEdit;
