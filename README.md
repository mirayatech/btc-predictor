## 💰 BTC Predictor

A game where you can guess if the price of Bitcoin (BTC/USD) will be higher or lower after 10 seconds. It uses real Bitcoin prices from trusted online sources and updates in real-time.

## 🎲 How to play it

- You'll guess whether the price of Bitcoin will be higher or lower after 10 seconds by clicking the buttons:

  - "Up" button for price going up.
  - "Down" button for price going down.

- You can always see your score and the latest Bitcoin price.

- Once you make a guess, you must wait until the guess is resolved before you can guess again.

- The guess is checked after 10 seconds, and you can only make one guess at a time.

- **If you're right:**

  - You said "up" and the price went up, or
  - You said "down" and the price went down.
  - You win 1 point, and you'll get a toast message about it, and you'll hear a sound effect.

- **If you're wrong:**

  - You will lose 1 point, and you'll get a toast message about it, and you'll hear a sound effect.
  - Your score will never go below 0.

- Your score is saved, so you can come back anytime to see your score and continue guessing.

## ⚡ Technologies

- `Vite`
- `React.js`
- `Firebase`
- `Zustand`
- `Tailwind CSS`
- `Playwright`

## 🚀 API

I got the real-time Bitcoin prices from a service called [Coinbase cloud](<(https://docs.cloud.coinbase.com/exchange/docs/websocket-overview)>).

To get the current Bitcoin price, I used the fetch method from a URL: "https://api.coindesk.com/v1/bpi/currentprice/BTC.json." Then, I used async/await to wait for the response and find the actual Bitcoin price from the JSON data.

I used WebSocket from [Coinbase Cloud](https://docs.cloud.coinbase.com/exchange/docs/websocket-overview) and a library called [ReconnectingWebSocket](https://github.com/joewalnes/reconnecting-websocket) to get real-time Bitcoin price updates. It connected to 'wss://ws-feed.pro.coinbase.com' and received live updates from Coinbase cloud whenever the Bitcoin price changed.

## 💭 Process:

I started by focusing on the game's features and testing. In the beginning, I didn't focus too much on how it looked.

I started by creating the authentication components, including their functionalities, so I could save each user's data and their initial score, which is 0, in the backend.

After that, I worked on the game page. At first, I used random numbers for the price (Math.random()) and buttons. Then, I set up the countdown timer. When the timer ends, a new price shows, and you can make your guess. Initially, the console.log was the only place to see if your guess was right or wrong. Later, I added notifications on the screen to tell you whether your guess was correct.

One tricky part was finding a 3rd-party library to provide real Bitcoin prices because many of them charged money, but I finally found one that worked well and was free. After setting up real-time Bitcoin prices, I moved to the backend to save the scores. Lastly, I created the home pages and styled the whole app.

## 🌪️ Challenges

Combining all the parts of the game to work together was a bit tricky. I had to learn about Websockets, which I hadn't used before, and how to fetch real-time Bitcoin prices using the library [ReconnectingWebSocket](https://github.com/joewalnes/reconnecting-websocket).

## 🤔 How can it be improved?

Adding animations would make the game feel more lively too. Also, I might let you guess prices for other digital money like Ethereum, not just Bitcoin, so the players have more fun options to choose from when playing.

### 🐛 Current Bug

- Sound effect only works on desktop and not mobile.

## 🎥 Demo/Preview

https://github.com/mirayatech/BTC-Predictor/assets/71933266/987b4872-1105-4b36-9123-5e4205aec0fb

## 🚦 Running the Project

To run the project in your local environment, follow these steps:

1. Clone the repository to your local machine
2. Run `npm install` or `yarn` in the project directory to install the required dependencies
3. Setup your Firebase account and replace the Firebase config values in the `.env` file with your own
4. Run `npm start dev` or `yarn start dev` to get the project started.
5. Open http://localhost:5173 (or the address shown in your console) in your web browser to see the app.
