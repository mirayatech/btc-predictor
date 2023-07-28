import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";
import { Form } from "./Form";
import { BackButton } from "./BackButton";

export default function SignUp() {
  const { signUp, error } = useSignUp();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await signUp(email, name, password);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-200">
      <BackButton />
      <Form
        title="Sign Up"
        additionalInput={true}
        buttonText="Sign Up"
        text="Already have an account?"
        linkUrl="/sign-in"
        linkText="Sign in"
        onSubmit={handleOnSubmit}
        error={error}
        email={email}
        name={name}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        setName={setName}
      />
    </div>
  );
}
