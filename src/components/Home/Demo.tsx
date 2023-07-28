import Gif from "../../assets/demo.gif";

export function Demo() {
  return (
    <div className="max-w-screen-md my-10 mx-auto">
      <img
        src={Gif}
        alt="Demo of how the game looks like"
        className="w-full h-full object-cover rounded-sm border shadow-lg"
      />
      <div>
        <div className="my-8 border-b-2">
          <h2 className="text-xl font-bold leading-10">
            Game Features & How to Play:
          </h2>
        </div>
        <ul className="flex flex-col list-none gap-6">
          <li className="text-zinc-500">
            <span className="font-semibold text-black">
              🌐 Live Market Data
            </span>
            <br />
            Our game grabs the latest Bitcoin prices from trustworthy places on
            the web. This means your guesses are based on what's happening in
            the market right now.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">🤔 Guessing Game</span>
            <br />
            The game is super easy - you just need to guess whether the Bitcoin
            price will be higher or lower after 10 seconds.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">⏳ 10 seconds Wait</span>
            <br />
            After you make a guess, you have to wait for 10 seconds to see if
            you're right or not.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">🚫 One Guess Only</span>
            <br />
            To keep the game fair, you can only make one guess at a time. You
            can guess again only after your current guess is done.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">🎯 Scoring</span> <br />
            If your guess is right, you get 1 point. If it's wrong, you lose 1
            point.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">🧑‍🎓 Start Fresh</span>
            <br />
            Everyone starts with a score of zero. It doesn't matter if you're
            new or experienced.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">💾 Score Saving</span>
            <br />
            Google's Firebase is used to save your scores. So, even if you leave
            and come back later, your score will still be there.
          </li>

          <li className="text-zinc-500">
            <span className="font-semibold text-black">🔄 Play Anytime</span>
            <br />
            You can close your browser and come back anytime. Your score will be
            saved, and you can pick up where you left off.
          </li>
        </ul>
      </div>
    </div>
  );
}
