import React from "react";
import s from './AutoComplete.module.scss';
import {IAutoCompleteProps} from "../../types";


const AutoComplete: React.FC<IAutoCompleteProps> = ({arr, color}) => {

    if (!arr.length) {return null}

    const listClasses = color ? `${s.autoCompleteList} ${s.green}` : s.autoCompleteList;

    const spanClasses = color ? `${s.autoCompleteItem} ${s.green}` : s.autoCompleteItem;

    return (
        <div className={listClasses}>
            { arr.map((el: string, i: number) => (
                <span key={i} className={spanClasses}>
                    {el}
                </span>
            )) }
        </div>
    );
};

export default AutoComplete;