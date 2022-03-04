import React, { HTMLProps, useState } from "react";
import s from "./FilterButton.module.scss";
import classNames from "classnames";

interface FilterButtonProps extends HTMLProps<HTMLInputElement> {
  filterPlaceholder: string;
  filterFields: string[];
  green?: boolean

}

const FilterButton = (props: FilterButtonProps) => {

  const { filterPlaceholder, filterFields, green } = props;

  const [inputValue, setInputValue] = useState("");
  const [showList, setShowList] = useState(false);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

  };
  const handleClickInput = () => {
    setShowList(true);
  };
  const handleClickListItem = (item: React.MouseEvent<HTMLLIElement>) => {
    // @ts-ignore
    console.log(item.target.innerHTML);
    // @ts-ignore
    setInputValue(item.target.innerHTML);
    setShowList(false);
  };

let inputClassName = classNames(s.filter__btn, {[s.filter__btn_green]: green})
  return (
    <div className = {`${s.filter__container}`}>
      <input
        placeholder = {filterPlaceholder}
        className = {inputClassName}
        value = {inputValue}
        onChange = {(event) => handleChangeInput(event)}
        onClick = {handleClickInput}
      />
      {showList &&
        <ul className = {`${s.list}`}>
          {filterFields
            .sort()
            .filter((item) => item.search(inputValue) != -1)
            .map((item) => (
              <li key = {item} className = {`${s.list__item}`}
                  onClick = {(item: React.MouseEvent<HTMLLIElement>) =>
                    handleClickListItem(item)}
              >
                {item}
              </li>
            ))}
        </ul>
      }
    </div>
  );
};

export default FilterButton;