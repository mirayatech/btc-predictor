import useStore from "../../library/state-manager";
import "./animation.css";
export function Price() {
  const { btcPrice, isFlashing } = useStore();

  let flashClass = "";
  if (isFlashing.active) {
    if (isFlashing.color === "green") {
      flashClass = "flash-success";
    } else if (isFlashing.color === "red") {
      flashClass = "flash-error";
      console.log("red");
    }
  }

  return (
    <div className="relative mx-auto bg-white max-w-4xl h-[180px] rounded-xl p-4 shadow-md flex justify-center mb-5 w-[400px] border">
      <span className="absolute top-4 left-4 text-md font-semibold text-zinc-800">
        BTC price in USD
      </span>
      <span
        aria-live="polite"
        id="bitcoin-price"
        className={`text-4xl text-center font-semibold my-auto pt-6 ${flashClass}`}
      >
        {btcPrice ? btcPrice.toFixed(2) : "Loading..."}
      </span>
    </div>
  );
}
