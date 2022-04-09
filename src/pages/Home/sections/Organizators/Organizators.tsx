import React, { FC, useEffect, useRef, useState } from 'react'

import Loop from '../../../../components/Loop/Loop'
import { CardProps } from '../../../../types'

import Card from './Card'
import s from './Organizators.module.scss'

const Organizators: FC = () => {
  const [runLoop, setRunLoop] = useState<boolean>(false)
  const [data, setData] = useState<Partial<CardProps>[]>([
    {
      name: 'Danil',
      surname: 'Ternovoi',
      age: 24
    },

    {
      name: 'Anton',
      surname: 'Ternovoi',
      age: 24
    },

    {
      name: 'Olga',
      surname: 'Belova',
      age: 24
    },

    {
      name: 'Lena',
      surname: 'Zotova',
      age: 24
    },

    {
      name: 'Sergey',
      surname: 'Zotov',
      age: 24
    }
  ])

  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef.current) {
      const {
        current: { clientHeight, offsetTop }
      } = wrapperRef

      const check = () => {
        const isTreshold = window.scrollY >= offsetTop - clientHeight * 0.9

        if (isTreshold) return setRunLoop((prev) => (prev ? prev : true))
        return setRunLoop(false)
      }

      window.addEventListener('scroll', check)
      window.addEventListener('load', check)
      return () => window.removeEventListener('scroll', check)
    }
  }, [wrapperRef])

  return (
    <section ref={wrapperRef}>
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
        run={runLoop}
      />

      <button className={s.more}>Больше организаторов</button>
    </section>
  )
}

export default Organizators
