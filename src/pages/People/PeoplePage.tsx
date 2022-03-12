import React, {ChangeEvent, useState} from "react";
import s from "./People.module.scss";
import {ReactComponent as SearchIcon} from './../../assets/img/search.svg';
import AutoComplete from "./components/AutoComplete/AutoComplete";
import UserCard from '../../components/UserCard/UserCard';
import FilterBtn from "./components/FilterBtn/FilterBtn";
import getUsers from "../../services/getUsers";
import {getCities} from "../../services/getCities";
import {getInterests} from "../../services/GetInterest";
import {IState} from "./types";
import {getCitiesArr, getAutoCompleteCities} from "./functions/getCitiesArr";
import {getInterestsArr, getAutoCompleteInterests} from "./functions/getInterestsArr";
import {getAutoCompleteArr} from "./functions/getAutoCompleteArr";
import FilterInput from "./components/FilterInput/FilterInput";


const PeoplePage = () => {

    const [state, setState] = useState<IState>({
        filterCity: false,
        filterInterest: false,
        filterSort: false,
        cities: [],
        interests: [],
        autoComplete: [],
    });

    const {cities, interests, autoComplete: autoCompleteArr} = state;

    const autoComplete = <AutoComplete arr={autoCompleteArr} />;

    const sortOptions = <AutoComplete arr={['По популярности', 'По росту', 'По возрасту', 'Сейчас онлайн']} color />;

    const showAutoCompleteCities = () => {
        getCities(0).then(arr => {
            setState((state) => ({
                ...state,
                filterCity: true,
                cities: getCitiesArr(arr),
                autoComplete: getAutoCompleteCities(arr)
            }));
        })
    };

    const showAutoCompleteInterests = () => {
        setState((state) => ({
            ...state,
            filterInterest: true,
            interests: getInterestsArr(getInterests()),
            autoComplete: getAutoCompleteInterests(getInterests())
        }));
    };

    const showSortOptions = () => setState((state: IState) => ({...state, filterSort: !state.filterSort}));

    const hideAutoCompleteCities = () => setState((state: IState) => ({...state, filterCity: false}));

    const hideAutoCompleteInterests = () => setState((state: IState) => ({...state, filterInterest: false}));

    const setAutoCompleteToState = (e: ChangeEvent<HTMLInputElement>, arr: string[]) => {
        const {value: inputText} = e.target;
        setState((state) => ({...state, autoComplete: getAutoCompleteArr(arr, inputText)}));
    };

    const onChangeCities = (e: ChangeEvent<HTMLInputElement>) => setAutoCompleteToState(e, cities as string[]);

    const onChangeInterests = (e: ChangeEvent<HTMLInputElement>) => setAutoCompleteToState(e, interests as string[]);

    const filterCityInput = <FilterInput onChange={onChangeCities} onBlur={hideAutoCompleteCities} />;

    const filterInterestInput = <FilterInput onChange={onChangeInterests} onBlur={hideAutoCompleteInterests} />;

    const filterCityBtn = <FilterBtn func={showAutoCompleteCities} textBtn="По городам" />;

    const filterInterestBtn = <FilterBtn func={showAutoCompleteInterests} textBtn="По интересам" />;

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
            <div className={s.filterWrapper}>
                {state.filterCity ? filterCityInput : filterCityBtn}
                {state.filterCity && autoComplete}
            </div>
            <div className={s.filterWrapper}>
                {state.filterInterest ? filterInterestInput : filterInterestBtn}
                {state.filterInterest && autoComplete}
            </div>
            <button className={s.reset}>
                Сбросить
            </button>
            <div className={s.sort}>
                <span className={s.allUsers}>
                    Всего участников: 1328
                </span>
                <div className={s.filterWrapper} onBlur={() => setState((state) => ({...state, filterSort: false}))}>
                <FilterBtn func={showSortOptions} textBtn="По популярности" color="green" />
                {state.filterSort && sortOptions}
                </div>
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
