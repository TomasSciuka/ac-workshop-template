import React from "react";
import "./Button.css";

const Button = ({ onClick, buttonText }) => {
  return (
    <button type="button" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
