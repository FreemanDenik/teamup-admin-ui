import React, { FC, useRef, useState } from "react";
import cls from "classnames";
import "./Input.scss";
interface InputProps {
  icon: "place" | "search";
  placeholder?: string;
}

const Input: FC<InputProps> = ({ placeholder = "enter something", icon }) => {
  const [focused, setFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cls("input", {
        input_focus: focused,
      })}
    >
      <div
        className={cls("input__icon", `input__icon--${icon}`)}
        onClick={() => inputRef.current?.focus()}
      />
      <input
        type="text"
        className="input__field"
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
