import React, { FC } from 'react'
import { v4 } from 'uuid'

import { CardProps } from '../../../../../types'
import mocktwo from '../../../../../assets/img/mock-org2.png'

import s from './Card.module.scss'

const Card: FC<Partial<CardProps>> = ({ name, surname, age, photo, desc }) => {
  return (
    <div className={s.wrapper}>
      <div
        className={s.avatar}
        style={{
          backgroundImage: `url("https://gravatar.com/avatar/0d050ec81f32eddac5fba9025cc2de8e?s=400&d=mp&r=x")` //Убрать заглушку когда будет приходить дто
        }}
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
                    backgroundImage: `url(${mocktwo})`
                  }}
                ></div>
              )
            })}
        </div>
        <a className={s.moreDetail} href="#">
          more
        </a>
      </footer>
    </div>
  )
}

export default Card
