import React, { ChangeEvent, FC, useRef, useState } from "react";
import cls from "classnames";
import "./Input.scss";

interface InputProps {
  icon: "place" | "search";
  placeholder?: string;
  value?: string;
  onChange?: (inputValue: string) => void;
}

const Input: FC<InputProps> = (
  {
    placeholder = "enter something",
    icon,
    value,
    onChange
  }) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState(value || '');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (onChange) {
      onChange(event.target.value);
    }
  };

  return (
    <div
      className = {cls("input", {
        input_focus: focused
      })}
    >
      <div
        className = {cls("input__icon", `input__icon--${icon}`)}
        onClick = {() => inputRef.current?.focus()}
      />
      <input
        type = "text"
        className = "input__field"
        placeholder = {placeholder}
        onFocus = {() => setFocused(true)}
        onBlur = {() => setFocused(false)}
        ref = {inputRef}
        value = {inputValue}
        onChange = {(event) => handleOnChangeInput(event)}
      />
    </div>
  );
};

export default Input;
