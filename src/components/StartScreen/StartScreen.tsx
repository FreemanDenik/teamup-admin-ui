import React from "react";
import s from "./StartScreen.module.scss";

const StartScreen = () => {
  return (
    <div className={s.offer}>
      <h1 className={s.offer__title}>About Us</h1>
      <p className={s.offer__desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default StartScreen;
