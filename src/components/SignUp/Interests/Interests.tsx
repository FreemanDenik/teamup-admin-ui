import React, { ChangeEvent, FC, useState } from "react";
import s from "./Interests.module.scss";

interface ConfirmProps {
  onClose: () => void;
}

const Interests: FC<ConfirmProps> = ({ onClose }) => {
  const [inputvalue, setInputValue] = useState<string>("");

  const changeInputState = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
  };

  return (
    <div className={s.block_interest}>
      <input
        type="text"
        className={s.input_interest}
        value={inputvalue}
        onChange={changeInputState}
      />

      <ul className={s.interests}>
        <li>
          <button className={s.interest} type="button">
            Игра
          </button>
        </li>
        <li>
          <button className={s.interest} type="button">
            Игра
          </button>
        </li>
        <li>
          <button className={s.interest} type="button">
            Игра
          </button>
        </li>
        <li>
          <button className={s.interest} type="button">
            Игра
          </button>
        </li>
        <li>
          <button className={s.interest} type="button">
            Игра
          </button>
        </li>
        <li>
          <button className={s.interest} type="button">
            Игра
          </button>
        </li>
      </ul>

      <button
        type="button"
        onClick={onClose}
        className={s.close_interest}
      ></button>
    </div>
  );
};

export default Interests;
