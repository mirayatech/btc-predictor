import { useState } from "react";
import { CloseIcon, QuestionIcon } from "../../assets/icons";
import Modal from "@mui/material/Modal";

export function Instructions() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <button onClick={handleOpen} aria-label="Open game instructions">
        <QuestionIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <button aria-label="Close game instructions" onClick={handleClose}>
            <CloseIcon />
          </button>
          <h1 id="modal-modal-title">How to Play BTC Predictor:</h1>
          <ul id="modal-modal-description">
            <li>
              Guess if Bitcoin's price will go "up" or "down" in one minute.
            </li>
            <li>After guessing, wait for a minute to see if you're right.</li>
            <li>Correct guess adds 1 point, wrong guess removes 1.</li>
            <li>Can't guess again until the last guess is done.</li>
            <li>Your score starts at 0 and is saved for next time.</li>
          </ul>
        </div>
      </Modal>
    </>
  );
}
