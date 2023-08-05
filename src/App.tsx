import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthContextProvider } from "./library/firebase/firebaseAuth";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Spinner } from "./components/Spinner/Spinner";

const Game = lazy(() => import("./components/Game/Game"));
const Home = lazy(() => import("./components/Home/Home"));
const SignIn = lazy(() => import("./components/Authentication/SingIn"));
const SignUp = lazy(() => import("./components/Authentication/SignUp"));
const NotFound = lazy(() => import("./components/NotFoud"));

export default function App() {
  return (
    <AuthContextProvider>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/user/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <ProtectedRoute>
                <Game />
              </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<Spinner />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<Spinner />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
}
