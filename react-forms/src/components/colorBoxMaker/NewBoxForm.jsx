import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  // initialize value
  const initailState = {
    width: "",
    height: "",
    color: "#000000",
  };
  const [boxInfo, setBoxInfo] = useState(initailState);

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // call addbox from parent component
    addBox(
      `${boxInfo.width.toString()}rem`,
      `${boxInfo.height.toString()}rem`,
      boxInfo.color
    );
    // reset value
    setBoxInfo(initailState);
  };
  //   handle change
  const handleChange = (e) => {
    e.preventDefault();
    // get name and value from e.target
    const { name, value } = e.target;
    setBoxInfo({
      // get old value
      ...boxInfo,
      // set new value
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="width">Width</label>
      <input
        type="number"
        name="width"
        id="width"
        min={1}
        max={7}
        value={boxInfo.width}
        onChange={handleChange}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        name="height"
        id="height"
        min={1}
        max={7}
        value={boxInfo.height}
        onChange={handleChange}
      />
      <label htmlFor="color">Color</label>
      <input
        type="color"
        name="color"
        id="color"
        value={boxInfo.color}
        onChange={handleChange}
      />{" "}
      <button>Add Box</button>
    </form>
  );
};

export default NewBoxForm;
