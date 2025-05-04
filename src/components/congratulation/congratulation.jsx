import React from 'react';
import style from './congratulation.module.css';

export const Congratulation = () => {
  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.title}>CONGRATULATION</div>
        <button className={style.restart}>RESTART GAME</button>
      </div>
    </div>
  );
};
