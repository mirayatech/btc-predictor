import Image from "../../assets/bitcoin.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../library/firebase/firebaseAuth";

export function Banner() {
  const { user } = useAuthContext();

  const linkUrl = user ? `/user/${user.uid}` : `/sign-in`;

  return (
    <div className=" h-400 flex flex-col justify-center items-center gap-5 bg-zinc-800 shadow-xl py-10">
      <img src={Image} alt="Bitcoin" className="banner__image w-20 mb-5" />

      <h1 className=" text-white text-4xl font-bold uppercase text-40 leading-3">
        BTC Predictor
      </h1>
      <h2 className="text-white font-medium text-lg tracking-wide">
        Predict the Future of Bitcoin in Minutes
      </h2>
      <Link
        to={linkUrl}
        // Inline styling is used here because Tailwind CSS doesn't support text shadow.
        style={{ textShadow: "0px -2px #d7a83b" }}
        className="bg-yellowPrimary border-b-4 border-yellowSecondary text-white text-md ease-in duration-200 p-2 px-20 mb-5 rounded  shadow-3xlactive:translate-y-[2px] active:border-b-2"
      >
        Play Now
      </Link>
    </div>
  );
}
