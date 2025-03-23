import React, { useState } from "react";
import style from "./gameStart.module.css";
import { useStore } from "../../store/game-store";
export const GameStart = () => {
  const { setStartGame,difficult,setDifficult } = useStore();
  return (
    <div>
      <div onClick={setStartGame}>start</div>
      <h1>{difficult}</h1>
      <select
        onChange={(e) => {
          setDifficult(e.target.value);
        }}
        value={difficult}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
    </div>
  );
};
