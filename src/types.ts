import { Path, RegisterOptions, UseFormRegister } from "react-hook-form";

export interface LoginUserModel {
  email: string;
  password: string;
}

export interface SignUpFields {
  email: string;
  password: string;
  username: string;
  firstname: string;
  youAgree?: boolean;
  lastname: string;
  aboutUser: string;
  city: string;
  age: string;
}

export interface InputProps<T> {
  label: Path<T>;
  register: UseFormRegister<T>;
  config: RegisterOptions;
  type?: string;
  area?: boolean;
  placeholder: string;
}
