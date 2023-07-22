import { onAuthStateChanged, User } from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";
import { Auth } from "./firebase";

export type AuthContextProviderProps = {
  children: React.ReactNode;
};

type AuthContext = {
  user: User | null;
};

const AuthContext = createContext<AuthContext>({ user: null });

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
