import { useEffect } from "react";
import useStore from "../../library/state-manager";

export function Timer({ id }: { id?: string }) {
  const { btcPrice, newBtcPrice, guess, timeRemaining, setGuessingState } =
    useStore();

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setGuessingState("countdown");
      } else {
        setGuessingState("guess", guess, btcPrice, newBtcPrice, id);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining, guess, btcPrice, newBtcPrice]);

  return (
    <p aria-live="polite">
      Timer: <span>{timeRemaining}</span>
    </p>
  );
}
