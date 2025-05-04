import { create } from "zustand";
import { words } from "../constants/words";

export const useStore = create((set, get) => ({
  randomWord: words[Math.floor(Math.random() * words.length)], //rain
  hideWord: "",

  health: 4,
  startGame: false,

  currentLetter: "",
  guessesLetters: [],

  difficult: "Easy",

  isWin: false,

  setIsWin: () => set(() => ({ isWin: true })),
  setCurrentLetter: (letter) => set(() => ({ currentLetter: letter })),
  setGuessesLetters: (letter) =>
    set((state) => ({ guessesLetters: [...state.guessesLetters, letter] })),
  updateHideWord: (letter) => {
    const { randomWord, hideWord } = get();
    // console.log(`Hide ${hideWord}`);
    // console.log(`random ${randomWord}`);
    const newHideWord = randomWord
      .split("")
      .map((char, index) => {
        const isAlreadyOpened =
          hideWord[index] !== "_" && hideWord[index] !== "‎";
        if (isAlreadyOpened) {
          return hideWord[index];
        }
        if (char.toLowerCase() === letter.toLowerCase()) {
          return char;
        }
        return "\u200E";
      })
      .join("");
    set({ hideWord: newHideWord });
  },
  minusHealth: () => set((state) => ({ health: state.health - 1 })),
  resetGame: () =>
    set((state) => ({
      randomWord,
      hideWord: randomWord.replace(/[a-zA-Zа]/g, "‎"),
      health: 4,
      guessesLetters: [],
      startGame: false,
      currentLetter: "",
    })),
  setStartGame: () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const difficult = get().difficult;
    let health = 4;
    if (difficult === "Easy") health = 4;
    if (difficult === "Medium") health = 3;
    if (difficult === "Hard") health = 2;

    set({
      randomWord,
      hideWord: randomWord.replace(/[a-zA-Zа]/g, "‎"),
      health,
      guessesLetters: [],
      startGame: true,
      currentLetter: "",
    });
  },

  setDifficult: (difficult) => set(() => ({ difficult })),
}));
