import React, { FC, ReactNode } from "react";

import classNames from "classnames";
import s from "./Form.module.scss";

type FormImageGuard = "fontg" | "new";

interface FormProps {
  dontHasAccount: string;
  eyeCatching: string;
  title: string;
  submitText: string;
  imageName: FormImageGuard;
  extraHeight?: boolean;
}

const Form: FC<FormProps> = ({
  dontHasAccount,
  eyeCatching,
  title,
  submitText,
  imageName,
  children,
  extraHeight = false,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={`${s.inner} ${extraHeight ? s.inner_height : ""}`}>
        <div className={`${s.form}`}>
          {/* HEADER */}
          <header className={`${s.header}`}>
            <div className={s.title}>
              {title}
              {/* Авторизация */}
            </div>
            <div className={s.dontHasAccount}>
              {/* Нет аккаунта? */}
              {dontHasAccount}
              <span className={s.dontHasAccount_eyeCatching}>
                {/* Создай новый */}
                {eyeCatching}
              </span>
            </div>
          </header>
          <main className={`${s.main}`}>
            {/* <input type="text" className={s.input} />
            <input type="text" className={s.input} />

            <label className={`${s.rememberMe}`}>
              <input type="checkbox" className={s.check} />
              <div className={s.pseudo} />
              <span>Оставаться в сети</span>
            </label> */}
            {children}

            <button className={s.auth}>
              {/* Авторизоваться */}
              {submitText}
            </button>
          </main>

          <footer className={`${s.footer}`}>
            <div className={s.googleAccess}>Или зайти с помощью</div>
            <div className={s.googleButton}></div>
          </footer>
        </div>

        <div className={`${s.image} ${s[`image_${imageName}`]}`} />

        <button className={s.close}></button>
      </div>
    </div>
  );
};

export default Form;
