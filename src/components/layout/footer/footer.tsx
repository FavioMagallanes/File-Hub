import { FOOTER_TEXTS } from "../../../constants/constants";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-5 w-full shrink-0 items-center px-4 md:px-6">
      <p className="text-xs text-gray-500 dark:text-gray-400">
        {FOOTER_TEXTS.ALL_RIGHTS_RESERVED}
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <span className="text-xs hover:underline underline-offset-4">
          {FOOTER_TEXTS.TERMS_OF_SERVICE}
        </span>
        <span className="text-xs hover:underline underline-offset-4">
          {FOOTER_TEXTS.PRIVACY}
        </span>
      </nav>
    </footer>
  );
};
