import React, {useState} from "react";
import s from "./People.module.scss";
import {ReactComponent as SearchIcon} from './../../assets/img/search.svg';
import UserCard from '../../components/UserCard/UserCard';
import FilterBtn from "./components/FilterBtn";
import getUsers from "../../services/getUsers";
import {getCities} from "../../services/getCities";
import {IState} from "./types";

const PeoplePage = () => {

    const [state, setState] = useState<IState>({filterCity: false, cities: []});

    const showAutoCompleteCities = () => {
        getCities(0).then(cities => {
                setState((state) => ({...state, filterCity: true, cities}));
            })
    };

    const hideAutoCompleteCities = () => setState((state) => ({state, filterCity: false}));

    const filterCityBtn = <FilterBtn func={showAutoCompleteCities} textBtn="По городам" />;

    const filterCityInput = <input
                                    type="text"
                                    className={s.filterInput}
                                    autoFocus
                                    onBlur={hideAutoCompleteCities}
                            />;

    const filterCityElement = state.filterCity ? filterCityInput : filterCityBtn;

    const autoCompleteCities = (
        <div className={s.autoCompleteList}>
            { state.cities?.slice(0, 5).map((el: any, i) => (
                    <span key={i} className={s.autoCompleteItem}>
                    {el.city}
                    </span>
                )) }
        </div>
    );

    const peopleList = getUsers().map(el => (<UserCard key={el.id} {...el} />));

    return (
        <div className={s.wrapper}>
            <h1 className={s.header}>Кого хотите найти?</h1>
            <div className={s.inputWrapper}>
                <input
                    type="text"
                    className={s.input}
                    defaultValue="Москва"
                    placeholder="Я хочу найти товарища"
                />
                <button type="submit" className={s.searchButton}>
                    <SearchIcon className={s.searchIcon} />
                </button>
            </div>
            <div className={s.filterCityWrapper}>
                {filterCityElement}
                {state.filterCity && autoCompleteCities}
            </div>
            <FilterBtn func={() => {}} textBtn="По интересам" />
            <button className={s.reset}>
                Сбросить
            </button>
            <div className={s.sort}>
                <span className={s.allUsers}>
                    Всего участников: 1328
                </span>
                <FilterBtn func={() => {}} textBtn="По популярности" color="green" />
            </div>
            <div className={s.peopleList}>
                {peopleList}
            </div>
            <button className={s.moreBtn}>
                Больше участников
            </button>
        </div>
    );
}

export default PeoplePage;
