import React, { ReactElement, useEffect, useState } from "react";
import classNames from "classnames";
import { v4 } from "uuid";

import s from "./UpcomingEvents.module.scss";
import Slider from "./Slider";

interface Human {
  name: string;
  age: number;
}

const UpcomingEvents = () => {
  const [humans, setHumans] = useState<Human[]>([
    {
      name: "danil",
      age: 24,
    },
    {
      name: "lena",
      age: 22,
    },
    {
      name: "sergo",
      age: 21,
    },
    {
      name: "danil 2",
      age: 24,
    },
    {
      name: "lena 2",
      age: 22,
    },
    {
      name: "sergo 2",
      age: 21,
    },
  ]);

  return (
    <section className={s.upcomingEvents}>
      <h1 className={s.title}>Ближайшие мероприятия возле вас</h1>
      <Slider<Human>
        gap={9}
        width={516}
        height={268}
        data={humans}
        renderItem={(human) => {
          return (
            <div className={s.eventCard} key={v4()}>
              <div className={s.eventCard__tags}>
                <div className={s.eventCard__tag}>Игры</div>
                <div className={s.eventCard__tag}>На дому</div>
              </div>

              <div className={s.eventCard__info}>
                <div className={s.eventCard__name}>Название мероприятия</div>
                <div className={s.eventCard__desc}>Описание мероприятия</div>
                <div className={s.eventCard__dateTime}>
                  25 января, с 11:00 до 15:00
                </div>
                <div className={s.eventCard__address}>город Москва</div>
              </div>
            </div>
          );
        }}
      />

      <button className={s.upcomingEvents__otherEvents}>
        Другие мероприятия
      </button>
      {/* <div className={s.stats}>
        {[
          {
            title: "Всего мероприятий",
            count: "335 003",
          },
          {
            title: "Всего участников",
            count: "1 335 003",
          },
        ].map(({ title, count }) => (
          <div className={s.statsCard} key={title}>
            <div className={s.statsCard__title}>{title}</div>
            <div className={s.statsCard__count}>{count}</div>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default UpcomingEvents;
