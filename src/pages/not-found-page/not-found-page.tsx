import { FC } from "react";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export const NotFoundPage: FC = () => {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <div className="space-y-4 text-center">
        <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl md:text-8xl">
          404
        </h1>
        <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
          Oops, the page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button className="px-8 mt-6" variant='outline'>Go back home</Button>
        </Link>
      </div>
    </div>
  );
};
