import React from "react";
import s from './AutoComplete.module.scss';

const AutoComplete = (arr: any) => {
    return (
        <div className={s.autoCompleteList}>
            { arr.slice(0, 5).map((el: string, i: number) => (
                <span key={i} className={s.autoCompleteItem}>
                    {el}
                </span>
            )) }
        </div>
    );
};

export default AutoComplete;