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

  setCurrentLetter: (letter) => set(() => ({ currentLetter: letter })),
  setGuessesLetters: (letter) =>
    set(() => ({ guessesLetters: [...state.guessesLetters, letter] })),

  minusHealth: () => set((state) => ({ health: state.health - 1 })),
  resetGame: () =>
    set((state) => ({
      randomWord: words[Math.floor(Math.random() * words.length)],
      health: 3,
    })),
  setStartGame: () =>
    set(() => {
      const randomWord = words[Math.floor(Math.random() * words.length)];
      const difficult = get().difficult;
      let health = 4;

      if (difficult === "Easy") {
        health = 4;
      }
      if (difficult === "Medium") {
        health = 3;
      }
      if (difficult === "Hard") {
        health = 2;
      }
      set({
        randomWord,
        hideWord: randomWord.replace(/[a-zA-Zа]/g, "‎"),
        health,
        guessesLetters: [],
        startGame:true,
        currentLetter:"",
      });
    }),

  setDifficult: (difficult) => set(() => ({ difficult })),
}));
