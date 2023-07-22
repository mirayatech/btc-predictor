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
    <div>
      <form onSubmit={handleOnSubmit}>
        <h2>{title}</h2>
        {additionalInput && (
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(event) => setName?.(event.target.value)}
            />
          </div>
        )}

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div>
          <button type="submit">{buttonText}</button>
          <div>
            <span>{text}</span>
            <Link to={linkUrl}>{linkText}</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
