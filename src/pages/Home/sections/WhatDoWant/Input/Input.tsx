import React, { ChangeEvent, FC, useRef, useState } from "react";
import cls from "classnames";
import "./Input.scss";

interface InputProps {
  icon: "place" | "search";
  placeholder?: string;
  onChangeFunc?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  onChange?: (inputValue: string) => void;
}

const Input: FC<InputProps> = (
  {
    placeholder = "enter something",
    id,
    icon,
    value,
    onChangeFunc,
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
        type="text"
        id={id}
        value={value}
        className="input__field"
        placeholder={placeholder}
        onChange={onChangeFunc}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
