import { FC } from "react";
import { useToggleState } from "../../../hooks/use-toggle-state";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { Link } from "react-router-dom";
import { FormSchemaType } from "../../../types/interfaces";
import { formSchema } from "../../../constants/form-schema";

import Icon from "../../icon/icon";

export const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useToggleState(false);

  const { register, handleSubmit } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const handleOnSubmit = (data: FormSchemaType) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <div
        key="1"
        className="flex flex-col items-center justify-center min-h-[90dvh] px-4 sm:px-6"
      >
        <div className="max-w-md w-full space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Login to Filehub</CardTitle>
              <Link to="/register" className="text-sm">
                Don't have an account?{" "}
                <span className="text-gray-500 hover:font-semibold hover:underline cursor-pointer">
                  Register now
                </span>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                  {...register("email")}
                />
              </div>
              <div className="relative space-y-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  placeholder="password"
                  required
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                />
                <Button
                  type="button"
                  className="absolute bottom-1 right-1 h-7 w-7"
                  size="icon"
                  variant="ghost"
                  onClick={setShowPassword}
                >
                  <Icon
                    name={showPassword ? "EyeOff" : "Eye"}
                    className="h-5 w-5 text-gray-500"
                  />
                  <span className="sr-only">Toggle password visibility</span>
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Sign in</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </form>
  );
};
