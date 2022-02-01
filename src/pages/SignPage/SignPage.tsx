import React, { FC } from "react";

import classNames from "classnames";
import s from "./SignPage.module.scss";

interface SignPageProps {}

const SignPage: FC<SignPageProps> = ({ children }) => {
  return <div className={s.signPage}>{children}</div>;
};

export default SignPage;
