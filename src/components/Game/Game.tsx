import { useEffect } from "react";
import { getBitcoinPrice, initWebSocket } from "../../library/api-handler";
import { useParams } from "react-router-dom";
import useStore from "../../library/state-manager";
import SignOutButton from "./SignOutButton";
import { GuessButtons, Instructions, Price, Score, Timer } from ".";

export default function Game() {
  const { setBtcPrice, setNewBtcPrice } = useStore();

  const { id } = useParams();

  useEffect(() => {
    getBitcoinPrice().then(setBtcPrice);

    const rws = initWebSocket((data) => {
      if (data.type === "ticker") {
        setNewBtcPrice(parseFloat(data.price));
      }
    });

    return () => {
      rws?.close();
    };
  }, []);
  //
  return (
    <div>
      <div>
        <SignOutButton />
        <Instructions />
      </div>
      <div>
        <Score id={id} /> <Timer id={id} />
      </div>
      <Price />
      <GuessButtons />
    </div>
  );
}
