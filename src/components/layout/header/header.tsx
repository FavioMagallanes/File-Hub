import { FC } from "react";
import { Button } from "../../ui/button";
import { Link, useLocation } from "react-router-dom";

import Icon from "../../icon/icon";

export const Header: FC = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  const isFilesPage = location.pathname === "/files";

  const renderButton = isLoginPage ? (
    <Link to="/login">
      <Button variant="outline">Sign in</Button>
    </Link>
  ) : isFilesPage ? (
    <Link to="/files-manager">
      <Button variant="outline">Go Back</Button>
    </Link>
  ) : null;

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b border-gray-200 dark:border-gray-800">
      <Link to="/">
        <div className="mr-6 flex items-center gap-3">
          <Icon name="FolderOpen" className="h-5 w-5" />
          <p className="text-xl font-bold">FileHub</p>
        </div>
      </Link>
      <div className="ml-auto flex gap-2">{renderButton}</div>
    </header>
  );
};
