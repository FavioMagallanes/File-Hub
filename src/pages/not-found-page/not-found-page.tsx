import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { NOT_FOUND_TEXTS } from "../../constants/constants";

export const NotFoundPage: FC = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
          404
        </h1>
        <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
          {NOT_FOUND_TEXTS.OOPS}
        </p>
        <Link to="/">
          <Button className="px-8 mt-6" variant="outline">
            {NOT_FOUND_TEXTS.GO_BACK_HOME}
          </Button>
        </Link>
      </div>
    </div>
  );
};
