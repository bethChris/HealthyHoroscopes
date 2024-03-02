import React from "react";

const CheckboxInput = ({ text, value, whenChange }) => {

  function swap() {
    return !value;
  }

  return (
    <div className="label-container">
      <label>{text}&nbsp;&nbsp;</label>
      <input
        type="checkbox"
        placeholder="Enter number of hours here"
        onChange={e => whenChange(swap())}
        value={value}
      ></input>
    </div>
  );
};

export default CheckboxInput;
