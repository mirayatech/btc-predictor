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
    <button onClick={signOut} aria-label="sign out">
      Sign Out
    </button>
  );
}
