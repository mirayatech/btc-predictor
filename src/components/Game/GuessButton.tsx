import useStore from "../../library/state-manager";

export function GuessButtons() {
  const { isGuessing, setGuess } = useStore();

  const handleGuess = (guess: "up" | "down") => {
    if (!isGuessing) {
      setGuess(guess);
    }
  };

  return (
    <div>
      <button
        aria-label="Guess Up"
        onClick={() => handleGuess("up")}
        disabled={isGuessing}
      >
        Up
      </button>
      <button
        aria-label="Guess Down"
        onClick={() => handleGuess("down")}
        disabled={isGuessing}
      >
        Down
      </button>
    </div>
  );
}
