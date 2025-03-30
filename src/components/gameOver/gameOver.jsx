import React from 'react'
import style from "./gameOver.module.css"
import { useStore } from '../../store/game-store'
export const GameOver = () => {
    const {resetGame} = useStore()
  return (
    <div className={style.wrapper}>
      <div className={style.header}>Game Over</div>
      <div className={style.restart} onClick={resetGame}>RESTART</div>
    </div>
  )
}
