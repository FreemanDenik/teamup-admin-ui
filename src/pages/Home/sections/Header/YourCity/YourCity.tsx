import React, { FC } from "react";

import s from "./YourCity.module.scss";

const YourCity = () => {
  return (
    <div className={s.wrapper}>
      <span>Ваш город: </span>
      <a href="#" className={s.link}>
        Москва
      </a>
    </div>
  );
};

export default YourCity;
