import Gif from "../../../assets/demo.gif";

import { gameFeatures } from "./demo-data";

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
          <h2 className="text-xl font-bold leading-10 text-zinc-800">
            Game Features & How to Play:
          </h2>
        </div>
        <ul className="flex flex-col list-none gap-6">
          {gameFeatures.map((feature, index) => (
            <li key={index} className="text-zinc-500 leading-7">
              <span className="font-bold text-zinc-800 ">{feature.title}</span>
              <br />
              {feature.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
