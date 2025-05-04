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

  setIsWin: (value) => set(() => ({ isWin: value })),
  setCurrentLetter: (letter) => set(() => ({ currentLetter: letter })),
  setGuessesLetters: (letter) =>
    set((state) => ({ guessesLetters: [...state.guessesLetters, letter] })),
  updateHideWord: (letter) => {
    const { randomWord, hideWord, setIsWin } = get();
  
    const newHideWord = randomWord
      .split("")
      .map((char, index) => {
        const isAlreadyOpened = hideWord[index] !== "_" && hideWord[index] !== "\u200E";
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
  
    const allRevealed = newHideWord.split("").every((ch, i) => {
      return ch.toLowerCase() === randomWord[i].toLowerCase();
    });
  
    if (allRevealed) {
      setIsWin(true);
    }
  },
  minusHealth: () => set((state) => ({ health: state.health - 1 })),
  resetGame: () =>{
    const newWord = words[Math.floor(Math.random() * words.length)]
    set((state) => ({
      randomWord:newWord,
      hideWord: newWord.replace(/[a-zA-Zа]/g, "‎"),
      health: 4,
      guessesLetters: [],
      startGame: false,
      currentLetter: "",
      isWin: false,
    }))},
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
