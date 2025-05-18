import React from 'react';
import style from "./gameOver.module.css";
import { useStore } from '../../store/game-store';

export const GameOver = () => {
  const { resetGame, randomWord } = useStore();

  return (
    <div className={style.wrapper}>
        <div className={style.header}>Game Over</div>
        <div className={style.wordReveal}>
          The word was: <span>{randomWord.toUpperCase()}</span>
        </div>
        <div className={style.restart} onClick={resetGame}>RESTART</div>
    </div>
  );
};
