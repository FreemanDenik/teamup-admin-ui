import React, { FC } from "react";
import { v4 } from "uuid";
import { CardProps } from "../../../../../types";
import s from "./Card.module.scss";
import mockone from "../../../../../assets/img/mock-org1.png";
import mocktwo from "../../../../../assets/img/mock-org2.png";

const Card: FC<Partial<CardProps>> = ({
  name = "name",
  surname = "surname",
  desc = "desc",
  age = 23,
}) => {
  return (
    <div className={s.wrapper}>
      <div
        className={s.avatar}
        style={{ backgroundImage: `url(${mockone})` }}
      />
      <div className={s.info}>
        <div className={s.name}>
          {name} {surname}
        </div>
        <div className={s.years}>{age} years</div>
        <div className={s.desc}>{desc}</div>
      </div>
      <footer className={s.footer}>
        <div className={s.followers}>
          {Array(3)
            .fill(0)
            .map((_, index, { length }) => {
              return (
                <div
                  className={s.follower}
                  key={v4()}
                  style={{
                    left: `${(33 * index) / 2}px`,
                    zIndex: `${length - index}`,
                    backgroundImage: `url(${mocktwo})`,
                  }}
                ></div>
              );
            })}
        </div>
        <a className={s.moreDetail} href="#">
          more
        </a>
      </footer>
    </div>
  );
};

export default Card;
