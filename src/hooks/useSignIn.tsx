import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { displayToast } from "../library/toast-manager";
import { Auth } from "../library/firebase/firebase";
import { useNavigate } from "react-router-dom";
export function useSignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState<FirebaseError | null>(null);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(Auth, email, password);
      displayToast("success", "Sign In Successful! Welcome back.", "😊");
      navigate(`/user/${Auth.currentUser?.uid}`);
    } catch (error) {
      setError(error as FirebaseError);
      console.log("Error:", error);
      displayToast("error", "Something went wrong!", "❌");
    }
  };

  return { signIn, error };
}
