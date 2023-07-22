import useStore from "../../library/state-manager";

export function Price() {
  const { btcPrice } = useStore();
  return (
    <div className="relative mx-auto bg-white max-w-4xl h-[180px] rounded-xl p-4 shadow-md flex justify-center mb-5 w-[400px] border">
      <span className="absolute top-4 left-4 text-md font-medium">
        BTC price in USD
      </span>
      <span
        aria-live="polite"
        id="bitcoin-price"
        className="text-4xl text-center font-semibold my-auto pt-6"
      >
        {btcPrice ? btcPrice + " USD" : "Loading..."}
      </span>
    </div>
  );
}
