import { FC, useState } from "react";
import { LoginForm } from "../login-form/login-form";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export const RegisterForm: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginClick = () => setShowLoginForm(true);

  if (showLoginForm) return <LoginForm />;

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white dark:bg-gray-950 shadow-lg rounded-lg p-8 w-full max-w-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Sign Up for FileHub</h2>
          <p className="text-gray-500 text-sm dark:text-gray-400 w-full">
            Create an account to start managing your files
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <Label className="text-xs" htmlFor="name">
              Name
            </Label>
            <Input id="name" placeholder="Enter your name" type="text" />
          </div>
          <div>
            <Label className="text-xs" htmlFor="email">
              Email
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" />
          </div>
          <div>
            <Label className="text-xs" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Enter a password"
              type="password"
            />
          </div>
          <div>
            <Label className="text-xs" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              placeholder="Confirm your password"
              type="password"
            />
          </div>
          <Button className="w-full" type="submit">
            Sign Up
          </Button>
        </form>
        <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-4">
          Already have an account?
          <p
            className="font-medium text-primary hover:underline cursor-pointer"
            onClick={handleLoginClick}
          >
            Login
          </p>
        </div>
      </div>
    </div>
  );
};
