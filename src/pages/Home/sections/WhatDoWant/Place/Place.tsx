import React, {useState} from "react";
import Input from "../Input/Input";
import {getCities} from "../../../../../services/getCities";
import s from './Place.module.scss';

export const Place = () => {

    const [state, setState] = useState({city: '', cities: [], edit: false});

    const input = () => document.getElementById('place');
    const autocomplete = () => document.getElementById('list');
    const closeAutoComplete = (e: any) => !e.path.some((el:React.ReactNode) => el === autocomplete() || el === input()) ? setState((state) => ({...state, edit: false})) : null;
    document.addEventListener('click', closeAutoComplete);
    const autoCompleteClick = (e: any) => setState((state) => ({...state, city: e.target.textContent, edit: false}));
    const autocompleteArr = state.cities.slice(0, 5).map((el: any, i) => (<span className={s.autocompleteItem} key={i} onClick={autoCompleteClick} onKeyDown={autoCompleteClick}>{el.city}</span>));
    const autocompleteList = (!!state.cities.length && state.edit) && <div className={s.autocompleteList} id="list">{autocompleteArr}</div>;

    const onChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState((state) => ({...state, edit: true, city: e.target.value}));
        // /check/city/{name} GET
       getCities('place').then((result) => result ? setState((state) => ({...state, cities: result})) : null);
    };

    return (
        <div className={s.autocomplete}>
        <Input placeholder="Местоположение" icon="place" onChangeFunc={onChangeFunc} id="place" value={state.city} />
            {autocompleteList}
        </div>
    );
};
