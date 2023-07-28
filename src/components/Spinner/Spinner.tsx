import { SpinnerIcon } from "../../assets/icons";
import "./styles.css";

export function Spinner() {
  return (
    <div role="alert" aria-label="loading" className="spinner">
      <SpinnerIcon className="spin" />
    </div>
  );
}
