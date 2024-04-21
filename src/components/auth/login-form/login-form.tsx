import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { RegisterForm } from "../register-form/register-form";
import Icon from '../../icon/icon'

export const LoginForm: FC = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  const handleLoginClick = () => {
    setShowRegisterForm(false); 
    setShowLoginForm(true);     
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 sm:px-6">
      <div className="max-w-md w-full space-y-6">
        {showLoginForm && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login to FileHub</CardTitle>
              <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-4">
                Don't have an account?
                <p
                  className="font-medium text-primary hover:underline cursor-pointer"
                  onClick={handleRegisterClick}
                >
                  Register
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="text-xs" htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="relative space-y-2">
                <div className="flex items-center">
                  <Label className="text-xs" htmlFor="password">Password</Label>
                </div>
                <Input id="password" required type="password" />
                <Button
                  className="absolute bottom-1 right-1 h-7 w-7"
                  size="icon"
                  variant="ghost"
                >
                  <Icon name="Eye" className="h-4 w-4" />
                  <span className="sr-only">Toggle password visibility</span>
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleLoginClick}>Login</Button>
            </CardFooter>
          </Card>
        )}
        {showRegisterForm && <RegisterForm />}
      </div>
    </div>
  );
};
