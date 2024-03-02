import React from "react";

const Button = ({ text, handleClick }) => {

  return (
    <div className="outer-box">

      <button className="customButton" onClick={handleClick}>{text}</button>

    </div>
  );
};

export default Button;
