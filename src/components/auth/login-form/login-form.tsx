import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Link } from "react-router-dom";

import Icon from "../../icon/icon";

const formSchema = z.object({
  email: z.string().email("Invalid Email").min(6, "Too Short"),
  password: z.string().min(6, "Too Short"),
});

type FormSchemaType = z.infer<typeof formSchema>;

export const LoginForm: FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
                  onClick={togglePasswordVisibility}
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
