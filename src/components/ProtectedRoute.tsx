import { Navigate } from "react-router-dom";
import { useAuthContext } from "../library/firebase/firebaseAuth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuthContext();

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
