import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthContextProvider } from "./library/firebase/firebaseAuth";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";

const Game = lazy(() => import("./components/Game/Game"));
const SignIn = lazy(() => import("./components/Authentication/SingIn"));
const SignUp = lazy(() => import("./components/Authentication/SignUp"));

export default function App() {
  return (
    <AuthContextProvider>
      <Toaster />
      <Routes>
        <Route
          path="/user/:id"
          element={
            <Suspense fallback={"Loading..."}>
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={"Loading..."}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={"Loading..."}>
              <SignUp />
            </Suspense>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}
