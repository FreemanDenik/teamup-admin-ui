import React from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input/Input";
import Title from "./Title";
import WidgetGrid from "./WidgetGrid";
import s from "./WhatDoWant.module.scss";
import { Place } from "./Place/Place";

const WhatDoWant = () => {
  const navigate = useNavigate();
  const handleClickSearchButton = () => {
  navigate('/events')
  };
  return (
    <section className = {s.whatDoWant}>
      <div className = {`${s.whatDoWant__search} ${s.whatDoWantSearch}`}>
        <Title />

        <div className = {s.whatDoWantSearch__top}>
          <Input placeholder = {"Поищите \"Игры\""} icon = "search" />
          <Place />
        </div>

        <button

          className = {s.whatDoWantSearch__btn}
          onClick = {handleClickSearchButton}
        >Поиск
        </button>
      </div>

      <div className = {`${s.whatDoWant__search} ${s.whatDoWantSearch}`}>
        <Title />

        <WidgetGrid
          widgetList = {[
            "Скоро начнутся",
            "Сегодня",
            "Завтра",
            "Сегодня",
            "Завтра",
            "Сегодня",
            "Завтра"
          ]}
        />
      </div>
    </section>
  );
};

export default WhatDoWant;
