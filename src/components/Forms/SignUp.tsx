import React, { FC, FocusEvent } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Form from "../../pages/SignPage/Form";
import s from "../../pages/SignPage/Form.module.scss";
import Interests from "../Interests";
import { SignUpFields } from "../../types";
import Input from "../Input";
import {ValidateUserName} from '../../services/ValidateUserName'

const SignUp: FC = () => {
  const { control, handleSubmit, reset } = useForm<SignUpFields>({
    defaultValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      age: "",
      city: "",
      username: "",
      aboutUser: "",
    },
  });

  const register: SubmitHandler<SignUpFields> = async (data) => {
    console.log(data);
  };
const handleInputOnBlur = (e: FocusEvent<HTMLInputElement>)=>{
   if ( e.target.name === "username") {
    ValidateUserName(e.target.value)
  } else {
    console.log("Валидация email");
  }

}
  return (
    <Form
      onSubmit={handleSubmit(register)}
      title="Создание пользователя"
      dontHasAccount="Уже есть пользователь ?"
      eyeCatching="Авторизуйся"
      imageName="new"
      submitText="Sign Up"
      redirectTo="/sign-in"
    >
      <div className={s.rowHalf}>
        <Controller
          control={control}
          name="lastname"
          rules={{
            required: true,
            pattern: {
              value: /[а-яa-z]/gi,
              message: "Invalid lastname",
            },
          }}
          render={({ field: { ref, ...field }, fieldState: { error } }) => {
            return (
              <div>
                <Input {...field} placeholder="Фамилия" />
                {error && error.message}
              </div>
            );
          }}
        />

        <Controller
          control={control}
          name="firstname"
          rules={{
            required: true,
            pattern: {
              value: /[а-яa-z]/gi,
              message: "Invalid firstname",
            },
          }}
          render={({ field: { ref, ...field }, fieldState: { error } }) => {
            return (
              <div>
                <Input {...field} placeholder="Имя" />
                {error && error.message}
              </div>
            );
          }}
        />
      </div>

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
              <Input {...field} placeholder="Почта" onBlur={handleInputOnBlur} />
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
        name="username"
        rules={{
          required: true,
          pattern: {
            value: /[а-яa-z]/gi,
            message: "Invalid username",
          },
        }}
        render={({ field: { ref, ...field }, fieldState: { error } }) => {
          return (
            <>

              <Input {...field} placeholder="Username" onBlur={handleInputOnBlur} />
              {error && error.message}
            </>
          );
        }}
      />

      <div className={s.rowHalf}>
        <Controller
          control={control}
          name="city"
          rules={{
            required: true,
          }}
          render={({ field: { ref, ...field }, fieldState: { error } }) => {
            return (
              <>
                <Input {...field} placeholder="Город" />
                {error && error.message}
              </>
            );
          }}
        />

        <Controller
          control={control}
          name="age"
          rules={{
            required: true,
          }}
          render={({ field: { ref, ...field }, fieldState: { error } }) => {
            return (
              <>
                <Input {...field} placeholder="Возраст" />
                {error && error.message}
              </>
            );
          }}
        />
      </div>

      <Controller
        control={control}
        name="aboutUser"
        rules={{
          required: true,
        }}
        render={({ field: { ref, ...field }, fieldState: { error } }) => {
          return (
            <>
              <label className={s.areaLabel}>
                <span className={s.dontHasAccount}>О себе</span>
                <textarea className={s.area}></textarea>
              </label>

              {error && error.message}
            </>
          );
        }}
      />

      <Interests />
    </Form>
  );
};

export default SignUp;
