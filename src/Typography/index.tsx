import { FC } from "react";
import s from "./Typography.module.scss";

/**
 * fonts
 * ptsans-bold
 * ptsans-regular
 *
 * 10px
 * 16px
 * 26px
 * 35px
 * 41px
 */

export const Text: FC = ({ children }) => {
  return <p className={s.text}>{children}</p>;
};

export const Title: FC = ({ children }) => {
  return <h1 className={s.title}>{children}</h1>;
};
