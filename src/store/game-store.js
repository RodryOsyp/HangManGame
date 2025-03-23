import { create } from "zustand";
import { words } from "../constants/words";

export const useStore = create((set, get) => ({
  randomWord: words[Math.floor(Math.random() * words.length)], //rain
  targetWord: () =>
    set((state) => ({ hideWord: state.randomWord.replace(/[a-zA-Zа]/g, "‎") })),
  hideWord: "",
  currentLetter: "",
  setCurrentLetter: (letter) => set(() => ({ currentLetter: letter })),
  health: (() => {
    const {difficult} = get()
    if (difficult === "Easy") {
      return 4;
    }
    if (difficult === "Medium") {
      return 3;
    }
    if (difficult === "Hard") {
      return 2;
    }
  }),
  minusHealth: () => set((state) => ({ health: state.health - 1 })),
  resetGame: () =>
    set((state) => ({
      randomWord: words[Math.floor(Math.random() * words.length)],
      health: 3,
    })),
  startGame: false,
  setStartGame: () => set(() => ({ startGame: true })),

  difficult: "Easy",
  setDifficult: (difficult) => set(() => ({ difficult })),
}));
