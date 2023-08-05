import { useState } from "react";
import { CloseIcon, QuestionIcon } from "../../assets/icons";
import Modal from "@mui/material/Modal";

export function Instructions() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open game instructions"
        className="bg-sky-500 border-b-4 border-sky-700 text-white text-2xl transition-all ease-in duration-200 px-4 rounded-lg shadow-mdactive:translate-y-[2px] active:border-b-2"
      >
        <QuestionIcon />
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center m-5"
      >
        <div className="relative max-w-full p-6  rounded-xl bg-white">
          <button
            aria-label="Close game instructions"
            onClick={() => setOpen(false)}
            className="text-zinc-800 absolute top-2 right-2 bg-transparent border-none text-2xl"
          >
            <CloseIcon />
          </button>
          <h1
            className="text-xl font-semibold text-zinc-800 py-2.5 border-b-2 border-gray-200"
            id="modal-modal-title"
          >
            How to Play BTC Predictor:
          </h1>
          <ul
            id="modal-modal-description"
            className="flex flex-col pt-5 gap-2.5"
          >
            <li>
              Guess if Bitcoin's price will go "up" or "down" in 5 seconds.
            </li>
            <li>After guessing, wait for 5 seconds to see if you're right.</li>
            <li>Correct guess adds 1 point, wrong guess removes 1.</li>
            <li>Can't guess again until the last guess is done.</li>
            <li>Your score starts at 0 and is saved for next time.</li>
          </ul>
        </div>
      </Modal>
    </>
  );
}
