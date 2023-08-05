import { Link } from "react-router-dom";
import NotFoundImage from "../assets/not-found.png"; // renamed the import for clarity

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-200">
      <div className="bg-white w-m-[400px] rounded-xl p-6 shadow-md flex flex-col justify-center items-center gap-5 border m-2">
        <p className="text-center font-semibold leading-7 text-md mb-5">
          404 - Not Found <br />{" "}
          <span className="font-medium">
            Page missing, just like Bitcoin's predictability.
          </span>
        </p>

        <img src={NotFoundImage} alt="Page Not Found" width={100} />

        <Link
          to="/"
          style={{ textShadow: "0px -2px #d7a83b" }}
          className="bg-yellowPrimary border-b-4 border-yellowSecondary text-white  ease-in duration-200 p-2 px-8 rounded shadow-3xl active:translate-y-[2px] active:border-b-2 text-sm"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
