import React, { FC, useMemo } from "react";
import { InputProps, SignUpFields } from "../../types";
import s from "./Input.module.scss";

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function Input<T extends SignUpFields>({
  label,
  register,
  config,
  area = false,
}: InputProps<T>) {
  const placeholder = useMemo(() => capitalize(label), [label]);

  return (
    <label className={s.label}>
      {area ? (
        <textarea
          placeholder={placeholder}
          {...register(label, config)}
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          {...register(label, config)}
        />
      )}
    </label>
  );
}

export default Input;
