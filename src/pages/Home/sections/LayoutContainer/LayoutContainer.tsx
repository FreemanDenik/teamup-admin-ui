import React, { FC } from "react";
import cls from "classnames";

import s from "./LayoutContainer.module.scss";

const LayoutContainer: FC = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default LayoutContainer;
