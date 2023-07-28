import { Auth } from "../../library/firebase/firebase";
import { displayToast } from "../../library/toast-manager";
import { useNavigate } from "react-router-dom";

export default function SignOutButton() {
  const navigate = useNavigate();

  function signOut() {
    Auth.signOut()
      .then(() => {
        displayToast("success", "Sign out successful. Goodbye!", "👋");
        navigate("/");
      })
      .catch((error) => {
        displayToast("error", "Something went wrong!", "❌");
        console.error("Error signing out:", error);
      });
  }

  return (
    <button
      onClick={signOut}
      aria-label="sign out"
      // Inline styling is used here because Tailwind CSS doesn't support text shadow.
      style={{ textShadow: "0px -2px #d7a83b" }}
      className="bg-yellowPrimary border-b-4 border-yellowSecondary text-white text-md ease-in duration-200 p-3 rounded-lg shadow-3xlactive:translate-y-[2px] active:border-b-2"
    >
      Sign Out
    </button>
  );
}
