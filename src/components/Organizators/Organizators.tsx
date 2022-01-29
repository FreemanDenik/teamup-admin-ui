import React, { FC, useState, useEffect, useRef } from "react";
import cls from "classnames";
import Card from "./Card";
import s from "./Organizators.module.scss";

const Organizators: FC = () => {
  const [offset, setOffset] = useState<number>(0);

  return (
    <div>
      <header className={s.header}>
        <h1 className={s.title}>Популярные организаторы</h1>
        <p className={s.subTitle}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </header>

      <div className={s.profiles}>
        <div className={s.carousel}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <button className={s.more}>Больше организаторов</button>
    </div>
  );
};

export default Organizators;
