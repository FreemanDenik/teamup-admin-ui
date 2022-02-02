import React, { FC, useState } from "react";
import Loop from "../../../../components/Loop/Loop";
import { CardProps, OrganizatorsProps } from "../../../../types";
import Card from "./Card";
import s from "./Organizators.module.scss";

const Organizators: FC<OrganizatorsProps> = ({}) => {
  const [data, setData] = useState<Partial<CardProps>[]>([
    {
      name: "Danil",
      surname: "Ternovoi",
      age: 24,
    },

    {
      name: "Anton",
      surname: "Ternovoi",
      age: 24,
    },

    {
      name: "Olga",
      surname: "Belova",
      age: 24,
    },

    {
      name: "Lena",
      surname: "Zotova",
      age: 24,
    },

    {
      name: "Sergey",
      surname: "Zotov",
      age: 24,
    },
  ]);

  return (
    <div>
      <header className={s.header}>
        <h1 className={s.title}>Популярные организаторы</h1>
        <p className={s.subTitle}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </header>

      <Loop<Partial<CardProps>>
        data={data}
        renderItem={(el) => <Card {...el} />}
        width={325}
        height={435}
        gap={6}
      />

      <button className={s.more}>Больше организаторов</button>
    </div>
  );
};

export default Organizators;
