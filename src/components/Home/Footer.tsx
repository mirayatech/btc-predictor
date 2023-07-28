import { CodeIcon, GithubIcon } from "../../assets/icons";

export function Footer() {
  return (
    <footer className="flex justify-center flex-col gap-3 p-5 items-center bg-[#252326]">
      <a
        href="https://www.miraya.tech/"
        target="_blank"
        className="flex items-center text-[#939ea7] duration-150 ease-linear hover:text-[#b6bdc4]"
      >
        <span className="pr-1">
          <GithubIcon />
        </span>
        Created by Miraya
      </a>
      <a
        href="https://github.com/mirayatech/BTC-Predictor"
        target="_blank"
        className="flex items-center text-[#939ea7] duration-150 ease-linear hover:text-[#b6bdc4]"
      >
        <span className="pr-1">
          <CodeIcon />
        </span>
        Source code on GitHub
      </a>
    </footer>
  );
}
