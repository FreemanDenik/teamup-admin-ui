import React, { FC, useEffect, useState } from "react";
import s from "./Interests.module.scss";
import { v4 } from "uuid";
import Input from "../../pages/Home/sections/WhatDoWant/Input";
import { GetInterest } from "../../services/GetInterest";
import { InterestDto } from "../../types";

interface InterestsProps {
}

const Interests: FC<InterestsProps> = ({}) => {
  const [userInterest, setUserInterest] = useState<InterestDto[]>([]);
  const [interestsList, setInterestList] = useState<InterestDto[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    setInterestList(GetInterest());
  }, []);

  const handleClickChooseInterest = (item: InterestDto) => {
    setUserInterest([...userInterest, item]);
    setShowModal(false);
    setSearchValue("");
  };
  const handleChangeSearchValue = (userSearchQuery: string) => {
    setSearchValue(userSearchQuery.toLowerCase());
  };
  const deleteUserInterestItem = (id: number) => {
    setUserInterest(userInterest.filter((item) => item.id !== id));
  };
  const handleClickAddInterest = () => {
    setShowModal(true);
  };

  return (
    <div className = {s.container}>
      {userInterest
        .map((item) => (
          <div className = {s.interest} key = {v4()}>
            {item.title}
            <button className = {s.delete}
                    onClick = {() => deleteUserInterestItem(item.id)} />
          </div>
        ))}
      <button
        className = {s.add}
        onClick = {handleClickAddInterest}
      />

      {showModal && <div className = {s.modal}>
        <Input
          icon = "search"
          value = {searchValue}
          onChange = {(userSearchQuery) => handleChangeSearchValue(userSearchQuery)}
        />
        <div className = {s.container}>
          {interestsList
            .filter((item) => !userInterest
              .includes(item) && item.title
              .toLowerCase()
              .indexOf(searchValue) !== -1)
            .map((item) => (
              <div className = {`${s.interest} ${s.interest_slim}`} key = {v4()}
                   onClick = {() => handleClickChooseInterest(item)}>
                {item.title}
              </div>
            ))}
        </div>
      </div>}
    </div>
  );
};

export default Interests;
