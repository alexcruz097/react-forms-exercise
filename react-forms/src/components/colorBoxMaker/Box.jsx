import React from "react";

const Box = ({ box, deleteBox, id }) => {
  const removeBox = (e) => {
    deleteBox(e);
  
  };

  return (
    <div style={box}>
      <button onClick={removeBox} id={id}>
        X
      </button>
    </div>
  );
};

export default Box;
