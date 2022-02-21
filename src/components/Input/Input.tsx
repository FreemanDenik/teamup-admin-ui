import React, { FC, HTMLProps, useMemo } from "react";

import s from "../../pages/SignPage/Form.module.scss";

interface InputProps extends HTMLProps<HTMLInputElement> {
  value:string
}

function Input(props: InputProps) {
  return <input  className={s.input} {...props} />;
}

export default Input;
