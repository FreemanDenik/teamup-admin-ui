import React, { useEffect, useState } from "react";
import s from "./EventsList.module.scss";
import CardEvent from "../../components/CardEvent";
import FilterButton from "../../components/FilterButton";
import GetCitiList from "../../services/GetCitiList";

interface EventsListProps {

}

const EventsList = (props: EventsListProps) => {
  const [listCity, setListCity] = useState<Array<string>>([]);
  const [timeFilter, setTimeFilter] = useState<Array<string>>(
    [
      "Сегодня",
      "Завтра",
      "На текущей неделе"
    ]);
const [listInterest, setListInterest] = useState<Array<string>>([
  'Футбол',
  "Музыка",
  "Кино",
  "Живопись"
])
// получаем список городов для фильтра
  useEffect(() => {
    GetCitiList().then((res) => {
      const resArr = res.map((item: { city: string }) => item.city);
      const uniqArr: Array<string> = Array.from(new Set(resArr));
      setListCity([...listCity, ...uniqArr]);
    });
  }, []);


  return (
    <div className = {`${s.eventsList}`}>
      <div className = {`${s.eventsList__container}`}>
        <h1 className = {`${s.eventsList__title}`}>
          Чем хотите заняться?
        </h1>
        <form className = {`${s.eventsList__search}, ${s.searchForm}`}>
          <input className = {`${s.searchForm__input}`}
                 type = "text"
                 placeholder = "Я хочу найти мероприятие" />

          <button className = {`${s.searchForm__button}`} />

        </form>
        <div className = {`${s.eventsList__filter}`}>
          <FilterButton
            filterPlaceholder = {`По городам`}
            filterFields = {listCity}
          />

          <FilterButton
            filterPlaceholder = {`По времени`}
            filterFields = {timeFilter} />
          <FilterButton
            filterPlaceholder={`По интересам`}
            filterFields={listInterest}/>

          <button className = {`${s.filter__btn} ${s.btnUnset}`}>Сбросить</button>
        </div>

        <div className = {`${s.eventsList__actualFilter}`}>
          <p className = {`${s.actualFilter__title}`}>Всего мероприятий: 548</p>
          <div className = {`${s.actualFilter__selectBox}`}>По актуальности</div>
        </div>
        <div className = {`${s.eventsList__card}`}>
          <CardEvent />
        </div>
        <button className = {`${s.eventsList__button}`}>Больше мероприятий</button>
      </div>
    </div>

  );
};

export default EventsList;