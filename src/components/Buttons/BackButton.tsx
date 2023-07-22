import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <div className="absolute top-0 left-0 p-4">
      <Link to="/" className="flex  hover:opacity-[.8]">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="ml-2">Back</span>
      </Link>
    </div>
  );
}
