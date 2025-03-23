import { useEffect, useState } from "react";
import style from "./keyboard.module.css";
import { KEY_ESCAPE } from "keycode-js";
import { useStore } from "../../store/game-store";

export const Keyboard = () => {
  const {currentLetter, setCurrentLetter} = useStore()
  
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleEscapeKeyDown = (e) => {
    // if (e.keyCode === KEY_ESCAPE) {
    //   console.log("Яна цист");
    // }
    setCurrentLetter(String.fromCharCode(e.keyCode))
  };

  

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.symbols}>
        {symbols.split("").map((e, i) => (
          <div
            key={i}
            className={
             currentLetter === e? `${style.active} ${style.symbol}` : style.symbol
            }
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};
