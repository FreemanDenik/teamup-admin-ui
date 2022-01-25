import React, { FC } from "react";
import classNames from "classnames";
import "./Input.scss";
interface InputProps {
  icon: "place" | "search";
  placeholder?: string;
}

const Input: FC<InputProps> = ({ placeholder = "enter something", icon }) => {
  return (
    <div className="input">
      <div className={classNames("input__icon", `input__icon--${icon}`)} />
      <input type="text" className="input__field" placeholder={placeholder} />
    </div>
  );
};

export default Input;
