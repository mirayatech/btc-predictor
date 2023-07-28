import { FirebaseError } from "firebase/app";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type FormProps = {
  title: string;
  additionalInput?: boolean;
  buttonText: string;
  text: string;
  linkUrl: string;
  linkText: string;
  error: FirebaseError | null;
  onSubmit: (event: React.FormEvent) => Promise<void>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  name?: string;
  setName?: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

export function Form({
  title,
  additionalInput,
  buttonText,
  text,
  linkUrl,
  linkText,
  onSubmit,
  email,
  setEmail,
  name,
  setName,
  password,
  setPassword,
}: FormProps) {
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className="w-full max-w-sm p-3">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border "
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-zinc-800">{title}</h2>
        {additionalInput && (
          <div className="mb-4">
            <label
              className="block text-zinc-800 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="placeholder:text-sm appearance-none border rounded w-full py-2 px-3 text-zinc-800 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName?.(event.target.value)}
            />
          </div>
        )}

        <div className="mb-4">
          <label
            className="block text-zinc-800 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="placeholder:text-sm appearance-none border rounded w-full py-2 px-3 text-zinc-800 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-zinc-800 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="placeholder:text-sm appearance-none border rounded w-full py-2 px-3 text-zinc-800 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="flex flex-col items-center justify-between">
          <button
            // Inline styling is used here because Tailwind CSS doesn't support text shadow.
            style={{ textShadow: "0px -2px #ce9e2e" }}
            className="bg-yellowPrimary border-b-4 border-yellowSecondary  w-full text-white text-md ease-in duration-200 p-2 mb-5 mt-2 rounded  shadow-3xlactive:translate-y-[2px] active:border-b-2"
            type="submit"
          >
            {buttonText}
          </button>
          <div className="text-sm">
            <span>{text}</span>
            <Link
              to={linkUrl}
              className="ml-1 text-yellowSecondary  hover:underline"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
