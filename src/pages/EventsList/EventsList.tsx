import React, { useEffect, useState } from "react";
import s from "./EventsList.module.scss";
import CardEvent from "../../components/CardEvent";
import FilterButton from "../../components/FilterButton";
import GetCitiList from "../../services/GetCitiList";
import { City, InterestDto } from "../../types";
import { GetInterest } from "../../services/GetInterest";

interface EventsListProps {

}

const EventsList = (props: EventsListProps) => {
  const [eventsList, setEventsList] = useState();
  const [resetFilterValue, setResetFilterValue] = useState(false);
  const [listCity, setListCity] = useState<Array<string>>([]);
  const [timeFilter, setTimeFilter] = useState<Array<string>>(
    [
      "Сегодня",
      "Завтра",
      "На текущей неделе"
    ]);
  const [listInterest, setListInterest] = useState<Array<string>>([]);
  const [actualFilter, setActualFilter] = useState<Array<string>>([
    "Актуальные 1",
    "Актуальные 2",
    "Актуальные 3"
  ]);

  // получаем список городов для фильтра
  useEffect(() => {
    GetCitiList().then((res: City[]) => {
      const resArr = res.map((item) => item.name);
      const uniqArr: Array<string> = Array.from(new Set(resArr));
      setListCity([...listCity, ...uniqArr]);
    });
  }, []);

  //получаем список интересов/увлечений для фильтра
  useEffect(() => {
    GetInterest().then((res: any) =>
      setListInterest([...listInterest, ...res.map((item: any) => item.interestsDto.title)])
    );

  }, []);

  const resetValueFilter = () => {
    setResetFilterValue(!resetFilterValue);
    };


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
            resetFilterValue = {resetFilterValue}
          />
          <FilterButton
            filterPlaceholder = {`По времени`}
            filterFields = {timeFilter}
            resetFilterValue = {resetFilterValue}
          />
          <FilterButton
            filterPlaceholder = {`По интересам`}
            filterFields = {listInterest}
            resetFilterValue = {resetFilterValue}
          />

          <button
            className = {`${s.filter__btn} ${s.btnUnset}`}
            onClick = {resetValueFilter}
            onBlur={resetValueFilter}
          >Сбросить
          </button>
        </div>

        <div className = {`${s.eventsList__actualFilter}`}>
          <p className = {`${s.actualFilter__title}`}>Всего мероприятий: 548</p>
          <FilterButton
            filterPlaceholder = {`По актуальности`}
            filterFields = {actualFilter}
            green />

        </div>
        <div className = {`${s.eventList__container}`}>
          <CardEvent />
        </div>
        <button className = {`${s.eventList__button}`}>Больше мероприятий</button>
      </div>
    </div>

  );
};

export default EventsList;