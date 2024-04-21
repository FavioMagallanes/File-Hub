import { FC } from "react";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";

import Icon from "../../icon/icon";

export const Header: FC = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="mr-6 flex items-center gap-3">
        <Icon name="Mountain" className="h-5 w-5" />
        <p className="text-xl font-bold">FileHub</p>
      </div>
      <div className="ml-auto flex gap-2">
        <Link to="/login">
          <Button variant="outline">Sign in</Button>
        </Link>
      </div>
    </header>
  );
};
