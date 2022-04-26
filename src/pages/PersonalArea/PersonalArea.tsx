import React, { FC } from 'react'

import InterS from '../../components/Interests/Interests.module.scss'
import CardEvent from '../../components/CardEvent/CardEvent'

import avatar from './baseImg/avatar.jpeg'

const PersonalArea: FC = () => {
  const ivent: any = []
  const interests = (): any => {
    console.log('a')
    return <div className={InterS.interest}>asdasd</div>
  }
  const ivents = (): any => {
    console.log('a')
    return <CardEvent event={ivent} />
  }

  return (
    <main>
      <button>Редактировать</button>
      <div className="basicData">
        <div className="basicData_data">
          <div className="basicData_avatar">
            <img src={avatar} alt="Avatar" />
          </div>
          <div className="basicData_information">
            <h2 className="basicData_information__name">Анастасия Рогова</h2>
            <span className="basicData_information__username"></span>
            <span className="basicData_information__email"></span>
            <span className="basicData_information__age"></span>
            <span className="basicData_information__city"></span>
          </div>
        </div>
        <div className="basicData_subscribesAndEvents">
          <div className="basicData_subscribes">
            <div className="basicData_subscribes__images">
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
              <img src={avatar} alt="" />
            </div>
            <span className="basicData_subscribes__title">подписота</span>
          </div>
          <span className="basicData_events">13 мероприятий</span>
        </div>
      </div>

      <div className="aboutUs">
        <h3 className="blockTitle">Обо мне</h3>
        <div className="aboutUs_block">
          <p className="aboutUs_text">Инфа обо мне</p>
        </div>
      </div>

      <div className="interests">
        <h3 className="blockTitle">Интересы</h3>
        {interests}
      </div>

      <div className="myActivities">
        <h3 className="blockTitle">Мои мероприятия</h3>
        {ivents}
      </div>
    </main>
  )
}

export default PersonalArea
