import React, { FC } from "react";
import Form from "../../pages/SignPage/Form";
import s from "../../pages/SignPage/Form.module.scss";
import Interests from "../Interests";

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  return (
    <Form
      title="Создание пользователя"
      dontHasAccount="Уже есть пользователь ?"
      eyeCatching="Авторизуйся"
      imageName="new"
      submitText="Sign Up"
    >
      <div className={s.rowHalf}>
        <input type="text" className={s.input} />
        <input type="text" className={s.input} />
      </div>

      <input type="text" className={s.input} />
      <input type="text" className={s.input} />

      <div className={s.rowHalf}>
        <input type="text" className={s.input} />
        <input type="text" className={s.input} />
      </div>

      <label className={s.areaLabel}>
        <span className={s.dontHasAccount}>О себе</span>
        <textarea className={s.area}></textarea>
      </label>

      <Interests />
    </Form>
  );
};

export default SignUp;
