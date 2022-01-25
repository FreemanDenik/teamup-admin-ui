import React, { FC } from "react";
import classNames from "classnames";

import s from "./LayoutContainer.module.scss";

interface LayoutContainerProps {}

const LayoutContainer: FC<LayoutContainerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default LayoutContainer;
