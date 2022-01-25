import React, { FC } from "react";
import classNames from "classnames";
import { v4 } from "uuid";

import s from "./Card.module.scss";

interface CardProps {}

const Card: FC<CardProps> = ({}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.avatar} />
      <div className={s.info}>
        <div className={s.name}>Name Surname</div>
        <div className={s.years}>18 years</div>
        <div className={s.desc}>Description</div>
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
