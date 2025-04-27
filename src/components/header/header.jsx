import React from "react";
import style from "./header.module.css";
import { useStore } from "../../store/game-store";
import { useEffect } from "react";
export const Header = () => {
  const { randomWord, hideWord } = useStore();
  // console.log(hideWord);
  useEffect(() => {}, []);
  // console.log(randomWord);
  

  return (  
    <div className={style.main}>
      <div className={style.headerWord}>
        {hideWord.split("").map((e, i) => (
          <div
            key={i}
            className={e !== " " ? style.wordActive : style.wordEmpty}
          >
            {e !== " " ? e : ""}
          </div>
        ))}
      </div>
    </div>
  );
};
