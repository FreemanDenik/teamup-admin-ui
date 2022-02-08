import React, { FC } from "react";
import s from "../../pages/SignPage/Form.module.scss";
import Form from "../../pages/SignPage/Form";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { LoginUserModel } from "../../types";
import Input from "../../components/Input";

const SignIn = ({}) => {
  const { control, handleSubmit } = useForm<LoginUserModel>({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const login: SubmitHandler<LoginUserModel> = async (data) => {
    console.log(data);
  };
  return (
    <Form
      onSubmit={handleSubmit(login)}
      title="Авторизация"
      dontHasAccount="Нет аккаунта?"
      eyeCatching="Создай новый!"
      submitText="Авторизоваться"
      imageName="fontg"
      redirectTo="/sign-up"
    >
      <Controller
        control={control}
        name="email"
        rules={{
          required: true,
          pattern: {
            value: /\w+@\w+\.\w+/gi,
            message: "Your email should be valid",
          },
        }}
        render={({ field: { ref, ...field }, fieldState: { error } }) => {
          return (
            <>
              <Input {...field} placeholder="Почта" />
              {error && error.message}
            </>
          );
        }}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: true,
          pattern: {
            value: /(\w|\d){3, 20}/,
            message: "Invalid password",
          },
        }}
        render={({ field: { ref, ...field }, fieldState: { error } }) => {
          return (
            <>
              <Input {...field} placeholder="Пароль" />
              {error && error.message}
            </>
          );
        }}
      />

      <Controller
        control={control}
        name="rememberMe"
        render={({ field: { ref, ...field }, fieldState: { error } }) => {
          return (
            <label className={`${s.rememberMe}`}>
              <input type="checkbox" className={s.check} />
              <div className={s.pseudo} />
              <span>Оставаться в сети</span>
            </label>
          );
        }}
      />
    </Form>
  );
};

export default SignIn;
