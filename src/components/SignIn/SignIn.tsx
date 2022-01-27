import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignUpFields } from "../../types";

import Input from "../Input";
import { Link } from "react-router-dom";
import s from "./SignIn.module.scss";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFields>({
    mode: "all",
  });
  const onSubmit: SubmitHandler<SignUpFields> = ({ email, password }) => {};

  const navigate = useNavigate();
  return (
    <div className={s.sign_wall}>
      <form className={s.signin_form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <h1 className={s.form__title}>Авторизация</h1>

          <p className={s.form_link}>
            Нет аккаунта?
            <Link to="/sign-up" className={s.link}>
              Создай новый!
            </Link>
          </p>

          <Input
            label="email"
            type="text"
            placeholder="Email"
            register={register}
            config={{
              required: "required field",
            }}
          />
          {errors.email ? <div>{errors.email.message}</div> : null}

          <Input
            label="password"
            type="text"
            placeholder="Password"
            register={register}
            config={{
              required: "required field",
            }}
          />
          {errors.password ? <div>{errors.password.message}</div> : null}

          <label className={s.you_agree}>
            <input
              type="checkbox"
              className={s.you_agree__checkbox}
              {...register("youAgree")}
            />
            <div className={s.you_agree__checkboxView} />
            <div className={s.you_agree__text}>Оставаться в сети</div>
          </label>

          <button className={s.signin_submit} type="submit" disabled={!isValid}>
            Авторизоваться
          </button>

          <div className={s.form_google}>
            <span className={s.access_with_google}>Или зайти с помощью</span>

            <button type="button" className={s.google_button} />
          </div>
        </div>

        <div className={s.form_photo}></div>

        <div>
          <button
            type="button"
            className={s.close_signin}
            onClick={() => {
              navigate("/");
            }}
          ></button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
