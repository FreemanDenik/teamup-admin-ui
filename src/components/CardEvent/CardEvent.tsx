import React from "react";
import citiImg from "../../assets/img/citiCard.png";
import s from "./CardEvent.module.scss";

const CardEvent = () => {
  return (
    <div className = {`${s.card__container}`}>
      <div className = {`${s.card}`}>
        <img className = {`${s.card__img}`}
             src = {citiImg}
             alt = "Фото города" />

        <div className = {`${s.card__widgetContainer}`}>
          <div className = {`${s.card__widget}`}>Досуг</div>
          <div className = {`${s.card__widget}`}>Гитара</div>
        </div>
        <section className = {`${s.card__textSection}`}>
          <p className = {`${s.eventDescription__title}`}>
            Встретиться поиграть на гитаре
          </p>
          <p className = {`${s.eventDescription__description}`}>
            Место для краткого описания события
          </p>
          <div className = {`${s.card__eventPlace}`}>
            <div className = {`${s.eventPlace__textField}`}>
              <div className = {`${s.eventPlace__day}`}>
                13 января
              </div>
              <div className = {`${s.eventPlace__time}`}>
                с 12:00 до 13:00
              </div>
              <div className = {`${s.eventPlace__sharer}`}>
                <span>Участники:</span> 13
              </div>
              <div className = {`${s.eventPlace__place}`}>
                <span>Место проведения:</span> Москва, ул. Академическая дом 5
              </div>
            </div>
            <div className = {`${s.eventPlace__ageLimit}`}>12+</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardEvent;

