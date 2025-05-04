import React from "react";
import style from "./congratulation.module.css";
import { useStore } from "../../store/game-store";

export const Congratulation = () => {
  const { resetGame } = useStore();
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.title}>CONGRATULATION</div>
        <button onClick={resetGame} className={style.restart}>RESTART GAME</button>
      </div>
    </div>
  );
};
