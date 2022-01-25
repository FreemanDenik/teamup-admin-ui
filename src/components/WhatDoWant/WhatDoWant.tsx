import React from "react";
import Input from "./Input/Input";
import Title from "./Title";
import WidgetGrid from "./WidgetGrid";
import s from "./WhatDoWant.module.scss";

const WhatDoWant = () => {
  return (
    <div className={s.whatDoWant}>
      <div className={`${s.whatDoWant__search} ${s.whatDoWantSearch}`}>
        <Title />

        <div className={s.whatDoWantSearch__top}>
          <Input placeholder={'Поищите "Игры"'} icon="search" />
          <Input placeholder="Местоположение" icon="place" />
        </div>

        <button className={s.whatDoWantSearch__btn}>Поиск</button>
      </div>

      <div className={`${s.whatDoWant__search} ${s.whatDoWantSearch}`}>
        <Title />

        <WidgetGrid
          widgetList={[
            "Скоро начнутся",
            "Сегодня",
            "Завтра",
            "Сегодня",
            "Завтра",
            "Сегодня",
            "Завтра",
          ]}
        />
      </div>
    </div>
  );
};

export default WhatDoWant;
