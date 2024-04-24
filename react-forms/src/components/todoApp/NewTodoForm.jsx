import React, { useState } from "react";

const NewTodoForm = ({ addItem }) => {
  const [todo, setTodo] = useState("");
  //   handle change
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  //   on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(todo);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"></label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Todo"
        value={todo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
