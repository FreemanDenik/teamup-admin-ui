import React from "react";
import s from "./FilterInput.module.scss";

interface IFilterInputProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
}

const FilterInput: React.FC<IFilterInputProps> = ({onChange, onBlur}) => {
    return (
        <input
            type="text"
            className={s.filterInput}
            autoFocus
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default FilterInput;