import { ReactElement } from "react";
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
  area?: boolean;
}

export interface CardProps {
  name: string;
  surname: string;
  desc: string;
  age: number;
}

export interface OrganizatorsProps {}

export interface BoxGeometry {
  width: number;
  height: number;
}

export interface LoopItemProps extends BoxGeometry {
  left: number;
}

export interface LoopProps<T = any> extends BoxGeometry {
  data: T[];
  renderItem(el: T, index?: number, arr?: T[]): ReactElement;
  gap: number;
  run?: boolean;
}

export type SliderStartGuard = "start" | "middle" | "end";

export interface SliderProps<T> {
  data: T[];
  renderItem(dataElement: T): ReactElement;
  width: number;
  height: number;
  gap: number;
  startFrom?: SliderStartGuard;
}
