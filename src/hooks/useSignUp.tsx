import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { useState } from "react";

import { Auth, Database } from "../library/firebase/firebase";
import { displayToast } from "../library/toast-manager";
import { useNavigate } from "react-router-dom";

export default function useSignUp() {
  const [error, setError] = useState<FirebaseError | null>(null);
  const navigate = useNavigate();

  const signUp = async (email: string, name: string, password: string) => {
    try {
      const user = await createUserWithEmailAndPassword(Auth, email, password);
      const userRef = doc(Database, `user/${user.user.uid}`);
      await setDoc(userRef, {
        score: 0,
        name: name,
        id: Auth.currentUser?.uid,
      });

      displayToast("success", "Sign Up Successful! Welcome.", "🎉");
      navigate(`/user/${Auth.currentUser?.uid}`);
    } catch (error) {
      setError(error as FirebaseError);
      console.log("Error:", error);
      displayToast("error", "Something went wrong!", "❌");
    }
  };
  return { signUp, error };
}
