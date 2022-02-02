import React from "react";
import s from "./StartScreen.module.scss";

const StartScreen = () => {
  return (
    <div className={s.offer}>
      <div className={s.inner}>
        <h1 className={s.title}>About Us</h1>
        <p className={s.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
