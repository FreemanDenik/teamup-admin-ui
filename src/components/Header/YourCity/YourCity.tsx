import React, { useState } from "react";
import s from "./YourCity.module.scss";

const YourCity = () => {

  const [state, setState] = useState({ edit: false, city: "Москва", cities: [] });

  const cityClick = () => {
    setState((state) => ({ ...state, edit: true }));
  };
  const autoCompleteClick = (e: React.MouseEvent | React.KeyboardEvent) => {
    setState((s) => ({ ...s, city: (e.target as any).textContent, edit: false }));
  };
  const onInputChange = () => {
    // /check/city/{name} GET
    fetch("https://gist.githubusercontent.com/gorborukov/0722a93c35dfba96337b/raw/435b297ac6d90d13a68935e1ec7a69a225969e58/russia")
      .then(resp => resp.json())
      .then(result => {
      const input: any = document.getElementById("cityInput");
      if (input?.value.trim() === "") {
        return;
      }
      const newArr = result.filter((el: any) => el.city
        .substring(0, input?.value.length)
        .toUpperCase() === input?.value
        .toUpperCase());
      setState((state) => ({ ...state, cities: newArr }));
    });
  };

  const cityText = !state.edit
    && <a className = {s.link} onClick = {cityClick}>{state.city}</a>;

  const autocompleteArr = state.cities
    .slice(0, 5)
    .map((el: any) => (
    <span className = {s.autocompleteItem} key = {el.city} onClick = {autoCompleteClick}
          onKeyDown = {autoCompleteClick}>{el.city}</span>));

  const autocompleteList = (!!state.cities.length && state.edit)
    && <div className = {s.autocompleteList}>{autocompleteArr}</div>;
  const cityInput = state.edit && (
    <input autoComplete = "off" id = "cityInput" type = "text" autoFocus onBlur = {() => {
      setTimeout(() => setState((state) => ({ ...state, edit: false })), 300);
    }} className = {s.cityInput} onChange = {onInputChange} />);

  return (
    <div className = {s.cityWrapper}>
      <span>Ваш город: </span>
      {cityText}
      <div className = {s.autocomplete}>
        {cityInput}
        {autocompleteList}
      </div>
    </div>
  );
};

export default YourCity;
