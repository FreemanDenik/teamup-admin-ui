import React, { FC } from "react";

import classNames from "classnames";
import s from "../../pages/SignPage/Form.module.scss";
import Form from "../../pages/SignPage/Form";

interface SignInProps {}

const SignIn: FC<SignInProps> = ({}) => {
  return (
    <Form
      title="Авторизация"
      dontHasAccount="Нет аккаунта?"
      eyeCatching="Создай новый!"
      submitText="Авторизоваться"
      imageName="fontg"
      redirectTo="/sign-up"
    >
      <input type="text" className={s.input} />
      <input type="text" className={s.input} />
      <label className={`${s.rememberMe}`}>
        <input type="checkbox" className={s.check} />
        <div className={s.pseudo} />
        <span>Оставаться в сети</span>
      </label>
    </Form>
  );
};

export default SignIn;
