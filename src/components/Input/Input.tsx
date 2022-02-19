import React, { HTMLProps } from "react";

import s from "../../pages/SignPage/Form.module.scss";
import localStyle from "./Input.module.scss";
import classNames from "classnames";

interface InputProps extends HTMLProps<HTMLInputElement> {
  serverValidate?:boolean
}

const Input = (props: InputProps)=> {
  console.log("Pros.isServerValidate", props.serverValidate);
  const {serverValidate} = props || false
  let inputClass = classNames(s.input,{[localStyle.serverValidate]:serverValidate})
  return <input className={inputClass} {...props} />;
}

export default Input;
