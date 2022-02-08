import React, { FC } from "react";
import s from "./Interests.module.scss";
import { v4 } from "uuid";
import Input from "../../pages/Home/sections/WhatDoWant/Input";

interface InterestsProps {}

const Interests: FC<InterestsProps> = ({}) => {
  return (
    <div className={s.container}>
      {Array(6)
        .fill(0)
        .map(() => (
          <div className={s.interest} key={v4()}>
            Игры
            <button className={s.delete}></button>
          </div>
        ))}
      <button className={s.add}></button>

      <div className={s.modal}>
        <Input icon="search" />
        <div className={s.container}>
          {Array(6)
            .fill(0)
            .map(() => (
              <div className={`${s.interest} ${s.interest_slim}`} key={v4()}>
                Игры
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
