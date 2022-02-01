import React, { FC } from "react";
import { SignIn } from "../../components/Forms";
import SignPage from "./SignPage";

interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = ({}) => {
  return (
    <SignPage>
      <SignIn />
    </SignPage>
  );
};

export default SignInPage;
