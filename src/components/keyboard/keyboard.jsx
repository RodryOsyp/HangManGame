import { useEffect } from "react";
import style from "./keyboard.module.css";
import { useStore } from "../../store/game-store";

export const Keyboard = () => {
  const {
    currentLetter,
    setCurrentLetter,
    randomWord,
    guessesLetters,
    setGuessesLetters,
    updateHideWord,
    minusHealth,
  } = useStore();

  const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const handleKeyDown = (e) => {
    const letter = String.fromCharCode(e.keyCode).toUpperCase();
    if (!symbols.includes(letter)) return;

    const {
      randomWord,
      guessesLetters,
      setCurrentLetter,
      setGuessesLetters,
      updateHideWord,
      minusHealth,
    } = useStore.getState();

    if (guessesLetters.includes(letter)) return;

    setCurrentLetter(letter);
    setGuessesLetters(letter);

    if (randomWord.toUpperCase().includes(letter)) {
      updateHideWord(letter);
    } else {
      minusHealth();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={style.container}>
      <h1>LETTER: {currentLetter}</h1>
      <div className={style.symbols}>
        {symbols.split("").map((e, i) => {
          const isGuessed = guessesLetters.includes(e);
          const isCorrect = randomWord.includes(e);
          const letterClass = isGuessed
            ? isCorrect
              ? style.correct
              : style.incorrect
            : "";

          return (
            <div key={i} className={`${style.symbol} ${letterClass}`}>
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};
