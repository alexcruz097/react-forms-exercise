import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
  const [boxes, setBoxes] = useState([
    { width: "3rem", height: "3rem", backgroundColor: "red" },
    { width: "3rem", height: "6rem", backgroundColor: "blue" },
    { width: "6rem", height: "7rem", backgroundColor: "purple" },
  ]);
  // add box funtion
  const addBox = (width, height, backgroundColor) => {
    // copy all of old array and add this new one
    setBoxes([...boxes, { width, height, backgroundColor }]);
  };

  return (
    <>
      <h2>List of Boxes</h2>
      <NewBoxForm addBox={addBox} />
      <div className="boxes-container">
        {boxes.map((box) => {
          return <Box box={box} key={uuid()}/>;
        })}
      </div>
    </>
  );
};

export default BoxList;
