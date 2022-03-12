import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardEvent from "../../components/CardEvent";
import FilterButton from "../../components/FilterButton";
import GetCitiList from "../../services/GetCitiList";
import { City, EventDto } from "../../types";
import { GetInterest } from "../../services/GetInterest";
import GetSingleCityEvents from "../../services/GetSingleCityEvents";
import s from "./EventsList.module.scss";
interface EventsListProps {

}

const EventsList = (props: EventsListProps) => {
  const { city } = useParams();

  const [eventsList, setEventsList] = useState<EventDto[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [numShowEvents, setNumShowEvents] = useState(5);
  // списки значений для фильтров
  const [listCity, setListCity] = useState<Array<string>>([]);
  const [listInterest, setListInterest] = useState<Array<string>>([]);
  const [timeFilterList, setTimeFilterList] = useState<Array<string>>(
    [
      "Сегодня",
      "Завтра",
      "На текущей неделе",
      "В текущем месяце"
    ]);
  const [actualFilterList, setActualFilterList] = useState<Array<string>>([
    "Актуальные 1",
    "Актуальные 2",
    "Актуальные 3"
  ]);
  // текущие значения фильтров
  const [filterValueCity, setFilterValueCity] = useState(city || "");
  const [filterValueInterest, setFilterValueInterest] = useState("");
  const [filterValueTime, setFilterValueTime] = useState("");
  const [filterValueActual, setFilterValueActual] = useState("");
  //сброс значения фильтров
  const [resetFilterValue, setResetFilterValue] = useState(false);
  // получаем список городов для фильтра
  useEffect(() => {
    GetCitiList().then((res: City[]) => {
      setListCity([...Array.from(new Set(res.map((item) => item.name)))]);
    });
  }, []);
  //получаем список интересов/увлечений для фильтра
  useEffect(() => {
    GetInterest().then((res: any) =>
      setListInterest([...listInterest, ...res.map((item: any) => item.interestsDto.title)])
    );

  }, []);
  //получение событий по определенному городу
  useEffect(() => {
    // TODO переписать setEventsList([...res]) когда бэк исправит возвращаемые данные
    // eventDtoList - лишний объект в ответе с бэка
    GetSingleCityEvents(`${filterValueCity}`).then((res: any) => setEventsList([...res.eventDtoList]));
  }, [filterValueCity]);

  const resetValueFilter = () => {
    setResetFilterValue(true);
    setFilterValueCity("");
    setFilterValueInterest("");
    setFilterValueTime("");
    setTimeout(() => setResetFilterValue(false), 300);
  };

  // изменение значений фильтров
  const getFilterValueCity = (value: string) => {
    setFilterValueCity(value);
  };
  const getFilterValueInterest = (value: string) => {
    setFilterValueInterest(value);
  };
  const getFilterValueTime = (value: string) => {
    setFilterValueTime(value);
  };
  const getFilterValueActual = (value: string) => {
    setFilterValueActual(value);
  };

  const showMoreEvents = () => {
    setNumShowEvents(numShowEvents + 5);
  };
  const filterEventsList = (item: EventDto, interest?: string, time?: string) => {
    if (interest) {
      return item.eventInterests.find((val) => val.title === interest);
    }
    return true;
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
                 placeholder = "Я хочу найти мероприятие"
                 value = {searchValue}
                 onChange = {(event) =>
                   setSearchValue(event.target.value)}
          />
          <button className = {`${s.searchForm__button}`} />
        </form>
        <div className = {`${s.eventsList__filter}`}>
          <FilterButton
            filterPlaceholder = {`По городам`}
            filterFields = {listCity}
            resetFilterValue = {resetFilterValue}
            getFilterValue = {getFilterValueCity}
            value = {filterValueCity}
          />
          <FilterButton
            filterPlaceholder = {`По времени`}
            filterFields = {timeFilterList}
            resetFilterValue = {resetFilterValue}
            getFilterValue = {getFilterValueTime}
          />
          <FilterButton
            filterPlaceholder = {`По интересам`}
            filterFields = {listInterest}
            resetFilterValue = {resetFilterValue}
            getFilterValue = {getFilterValueInterest}
          />
          <button
            className = {`${s.filter__btn} ${s.btnUnset}`}
            onClick = {resetValueFilter}
          >
            Сбросить
          </button>
        </div>
        <div className = {`${s.eventsList__actualFilter}`}>
          <p className = {`${s.actualFilter__title}`}>Всего мероприятий: 548</p>
          <FilterButton
            filterPlaceholder = {`По актуальности`}
            filterFields = {actualFilterList}
            green
            getFilterValue = {getFilterValueActual}
          />

        </div>
        <div className = {`${s.eventList__container}`}>
          {eventsList
            .slice(0,numShowEvents)
            .filter((item) => filterEventsList(item, filterValueInterest))
            .map((event: EventDto) => {
              return <CardEvent event = {event} key = {event.id} />;
            })}

        </div>
        <button
          className = {`${s.eventList__button}`}
          onClick = {showMoreEvents}
        >Больше мероприятий
        </button>
      </div>
    </div>

  );
};

export default EventsList;