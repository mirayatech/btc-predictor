import ReconnectingWebSocket from "reconnecting-websocket";

export async function getBitcoinPrice() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  return data.bpi.USD.rate_float;
}

export function initWebSocket(onMessage: (data: any) => void) {
  const coinbaseWebSocket = new ReconnectingWebSocket(
    "wss://ws-feed.pro.coinbase.com"
  );

  coinbaseWebSocket.onopen = () => {
    coinbaseWebSocket.send(
      JSON.stringify({
        type: "subscribe",
        channels: [{ name: "ticker", product_ids: ["BTC-USD"] }],
      })
    );
  };

  coinbaseWebSocket.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    onMessage(data);
  };

  return coinbaseWebSocket;
}
