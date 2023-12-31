import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
const todos = [
  {
    id: 1,
    title: "Running",
    complete: true,
  },
  {
    id: 2,
    title: "Do the homework",
    complete: false,
  },
  {
    id: 3,
    title: "Sport",
    complete: false,
  },
  {
    id: 4,
    title: "Badminton",
    complete: false,
  },
];
const TodoApp = () => {
  const [todoList, setTodoList] = useState(todos);
  const [todoName, setTodoName] = useState("");
  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleAddNewTodo = (e) => {
    const newTodo = {
      id: todoList.length + 1,
      title: todoName,
      complete: false,
    };
    setTodoList([newTodo, ...todoList]);
  };
  const handleRemoveTask = (index) => {
    const todos = [...todoList];
    todos.splice(index, 1);
    setTodoList(todos);
  };
  return (
    <div className="mx-auto max-w-[500px] my-10 p-5">
      <div className="flex items-center gap-x-5">
        <input
          type="text"
          placeholder="New todo item"
          className="w-full border border-slate-200 rounded-lg py-3 px-5 outline-none bg-transparent"
          name="todo"
          onChange={handleInputChange}
        />
        <button
          className="inline-flex items-center justify-center px-8 py-3 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg"
          onClick={handleAddNewTodo}
        >
          Add
        </button>
      </div>
      <div className="mb-10"></div>
      <div className="flex flex-col gap-y-5">
        <ul>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            transitionEnter
            transitionLeave
          >
            {todoList.map((item, index) => (
              <li
              // dùng key phải là unique
                key={item.id}
                className={`flex items-center justify-between gap-x-3 text-base`}
              >
                <span>{item.title}</span>
                <button
                  className="p-2 rounded-lg bg-red-500 text-white"
                  onClick={() => handleRemoveTask(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
// Drag and drop
// key: abc Lesson 1: Introduction
// key: xyz Lesson 2: About
// components: Button, Input, Textarea, Label, Avatar, Loading, Layout
// modules: User, Campaign, Post, Cart
// hooks: Custom hooks
// utils: Functions convertToNumber, formatDate, convertCurrency
// styles
// assets, public: Images, Icons, Fonts
// contexts
// redux, store
// common
// Naming convention
