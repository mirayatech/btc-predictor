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

    const coinbaseWebSocket = initWebSocket((data) => {
      if (data.type === "ticker") {
        setNewBtcPrice(parseFloat(data.price));
      }
    });

    return () => {
      coinbaseWebSocket?.close();
    };
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center  bg-slate-200">
      <div className="mx-auto bg-white w-[400px] h-[85px] rounded-xl p-4 shadow-md flex justify-between mb-5 border">
        <SignOutButton />
        <Instructions />
      </div>
      <div className="mx-auto bg-white w-[400px] rounded-xl p-4 shadow-md flex justify-between mb-5 border">
        <Score id={id} /> <Timer id={id} />
      </div>
      <Price />
      <GuessButtons />
    </div>
  );
}
