import React from "react";

const Todo = ({ todo, deleteItem , id}) => {
  const deleteFunc = (e) => {
    deleteItem(e);
  };
  return (
    <div>
      <p id={id}>{todo}</p>
      <button onClick={deleteFunc}>Delete</button>
    </div>
  );
};

export default Todo;
