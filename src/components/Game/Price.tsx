import useStore from "../../library/state-manager";

export function Price() {
  const { btcPrice } = useStore();
  return (
    <div>
      <span>BTC price in USD</span>
      <span aria-live="polite" id="bitcoin-price">
        {btcPrice ? btcPrice + " USD" : "Loading..."}
      </span>
    </div>
  );
}
