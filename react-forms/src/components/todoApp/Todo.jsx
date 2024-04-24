import React from "react";

const Todo = ({ todo, deleteItem, id, updateItem }) => {
  const deleteFunc = (e) => {
    deleteItem(e);
  };
  const editeFunc = (e) => {
    updateItem(e);
  };
  return (
    <div>
      <p id={id}>{todo}</p>
      <button onClick={deleteFunc}>Delete</button>
      <button onClick={editeFunc}>Edit Todo</button>
    </div>
  );
};

export default Todo;
