import React, { FC } from "react";
import { InputProps, SignUpFields } from "../../types";
import s from "./Input.module.scss";
type Fields = SignUpFields;

function Input<T extends Fields = SignUpFields>({
  label,
  register,
  config,
  type,
  area = false,
  placeholder,
}: InputProps<T>) {
  let inputField;
  if (type === "short") {
    inputField = (
      <input
        className={s.input_short}
        type={type}
        placeholder={placeholder}
        {...register(label, config)}
      />
    );
  } else if (type === "textarea") {
    inputField = (
      <textarea
        placeholder={placeholder}
        className={s.formField__input_area}
        {...register(label, config)}
      />
    );
  } else if (type === "text") {
    inputField = (
      <input
        className={s.input_small}
        type={type}
        placeholder={placeholder}
        {...register(label, config)}
      />
    );
  } else {
    inputField = (
      <input
        className={s.input}
        type={type}
        placeholder={placeholder}
        {...register(label, config)}
      />
    );
  }

  return <label className={s.label}>{inputField}</label>;
}

export default Input;
