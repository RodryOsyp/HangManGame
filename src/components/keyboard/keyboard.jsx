import { useEffect, useState } from "react";
import style from "./keyboard.module.css";
import { KEY_ESCAPE } from "keycode-js";
import { useStore } from "../../store/game-store";

export const Keyboard = () => {
  const {
    currentLetter,
    setCurrentLetter,
    setResetGame,
    randomWord,
    guessesLetters,
    setGuessesLetters,
  } = useStore();
  // console.log(randomWord);
  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const handleEscapeKeyDown = (e) => {
    const letter = String.fromCharCode(e.keyCode).toUpperCase();
    
    if (!symbols.includes(letter)) return;

    const {
      randomWord,
      guessesLetters,
      setCurrentLetter,
      setGuessesLetters,
      updateHideWord,
      minusHealth,
      setIsWin,
      hideWord,
    } = useStore.getState();
    // console.log(`Hide ${hideWord}`);
    // console.log(`random ${randomWord}`);
    if (guessesLetters.includes(letter)) return;
    
    setCurrentLetter(letter);
    setGuessesLetters(letter);

    if (randomWord.toUpperCase().includes(letter)) {
      // hideWord === randomWord ? setIsWin() : ;
      updateHideWord(letter);

      
     
    } else {
      minusHealth();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscapeKeyDown);

    return () => {
      window.removeEventListener("keydown", handleEscapeKeyDown);
    };
  }, []);

  return (
    <div className={style.container}>
      <h1>LETER: {currentLetter}</h1>
      <div className={style.symbols}>
        {symbols.split("").map((e, i) => (
          <div
            key={i}
            className={
              currentLetter === e
                ? `${style.active} ${style.symbol}`
                : style.symbol
            }
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
};
