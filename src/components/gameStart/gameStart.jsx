import React, { useState } from "react";
import style from "./gameStart.module.css";
import { useStore } from "../../store/game-store";
import { PiArrowBendDownLeft, PiArrowBendDownRight } from "react-icons/pi";

export const GameStart = () => {
  const { setStartGame, difficult, setDifficult } = useStore();
  return (
    <div className={style.wrapper}>
      <div className={style.buttonStart} onClick={setStartGame}>
        start
      </div>

      <div className={style.header}>
        <div className={style.yourDiff}>Your Difficul</div>
        <div className={style.arrow}>
          <PiArrowBendDownRight color="blueviolet" className={style.arrowR} />
          <h1>{difficult}</h1>
          <PiArrowBendDownLeft color="blueviolet" className={style.arrowL} />
        </div>
      </div>

      <select
        onChange={(e) => {
          setDifficult(e.target.value);
        }}
        value={difficult}
      >
        <option className={style.diff} value="Easy">
          Easy
        </option>
        <option className={style.diff} value="Medium">
          Medium
        </option>
        <option className={style.diff} value="Hard">
          Hard
        </option>
      </select>
    </div>
  );
};
