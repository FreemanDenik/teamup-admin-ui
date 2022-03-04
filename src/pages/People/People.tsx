import React from "react";
import s from "./People.module.scss";
import {ReactComponent as SearchIcon} from './../../assets/img/search.svg';
import {ReactComponent as ArrowDown} from './../../assets/img/down-arrow.svg';


const People = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.header}>Кого хотите найти?</h1>
            <div className={s.inputWrapper}>
                <input
                    type="text"
                    className={s.input}
                    placeholder="Я хочу найти товарища"
                />
                <button type="reset" className={s.searchButton}><SearchIcon className={s.searchIcon} /></button>
            </div>
            <button className={s.filter}>
                По городам <ArrowDown className={s.downArrow} />
            </button>
            <button className={s.filter}>
                По интересам <ArrowDown className={s.downArrow} />
            </button>
            <button className={s.reset}>
                Сбросить
            </button>
        </div>
    );
};

export default People;
