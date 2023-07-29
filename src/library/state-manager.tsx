import create from "zustand";
import { updateDoc, doc, increment, getDoc } from "firebase/firestore";
import { Auth, Database } from "./firebase/firebase";
import { UserType } from "./types";
import { displayToast } from "./toast-manager";
import loseSound from "../assets/sounds/lose.wav";
import winSound from "../assets/sounds/win.wav";

type Store = {
  btcPrice: number | null;
  newBtcPrice: number | null;
  guess: "up" | "down" | "";
  timeRemaining: number;
  isGuessing: boolean;
  setBtcPrice: (price: number | null) => void;
  setNewBtcPrice: (price: number | null) => void;
  setGuess: (guess: "up" | "down" | "") => void;
  setTimeRemaining: (time: number) => void;
  setIsGuessing: (guessing: boolean) => void;
  setGuessingState: (
    state: "countdown" | "guess",
    guess?: "up" | "down" | "",
    oldPrice?: number | null,
    newPrice?: number | null,
    id?: string
  ) => void;
};

const useStore = create<Store>((set) => {
  const winSoundElement = new Audio(winSound);
  const loseSoundElement = new Audio(loseSound);
  const userRef = doc(Database, `user/${Auth.currentUser?.uid}`);

  return {
    btcPrice: null,
    newBtcPrice: null,
    guess: "",
    timeRemaining: 10,
    isGuessing: false,
    setBtcPrice: (price) => set({ btcPrice: price }),
    setNewBtcPrice: (price) => set({ newBtcPrice: price }),
    setGuess: (guess) => set({ guess, isGuessing: true }),
    setTimeRemaining: (time) => set({ timeRemaining: time }),
    setIsGuessing: (guessing) => set({ isGuessing: guessing }),
    setGuessingState: (state, guess, oldPrice, newPrice) => {
      if (state === "countdown") {
        set(({ timeRemaining }) => ({ timeRemaining: timeRemaining - 1 }));
      } else if (state === "guess") {
        set((state) => {
          if (
            (guess === "up" && newPrice! > oldPrice!) ||
            (guess === "down" && newPrice! < oldPrice!)
          ) {
            updateDoc(userRef, {
              score: increment(1),
            });
            displayToast("success", "Congratulations! You won a point.", "🎉");
            winSoundElement.play();
          } else if (guess !== "") {
            getDoc(userRef).then((docSnap) => {
              if (docSnap.exists()) {
                const userData = docSnap.data() as UserType;
                if (userData.score > 0) {
                  updateDoc(userRef, {
                    score: increment(-1),
                  });
                  displayToast("error", "Oops! You lost a point.", "😞");
                  loseSoundElement.play();
                }
              }
            });
          }

          return {
            ...state,
            btcPrice: newPrice,
            guess: "",
            timeRemaining: 10,
            isGuessing: false,
          };
        });
      }
    },
  };
});

export default useStore;
