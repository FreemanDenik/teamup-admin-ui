import React, { FC } from "react";
import SignPage from "./SignPage";
import { SignUp } from "../../components/Forms";

interface SignUpPageProps {}

const SignUpPage: FC<SignUpPageProps> = ({}) => {
  return (
    <SignPage>
      <SignUp />
    </SignPage>
  );
};

export default SignUpPage;
