import React, { FC } from "react";
import s from "./SignPage.module.scss";

interface SignPageProps {}

const SignPage: FC<SignPageProps> = ({ children }) => {
  return <div className={s.signPage}>{children}</div>;
};

export default SignPage;
