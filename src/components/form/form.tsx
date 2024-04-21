import { FC, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Icon from "../../components/icon/icon";
import { Link } from "react-router-dom";

interface InputField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}

interface FormCardProps {
  title: string;
  description: string;
  textRoute: string;
  textButton: string;
  path: string;
  inputs: InputField[];
}

export const Form: FC<FormCardProps> = ({
  title,
  inputs,
  description,
  textRoute,
  textButton,
  path,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center min-h-[90dvh] sm:px-6">
      <div className="max-w-md w-full space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <div className="flex gap-3 text-sm text-gray-500 dark:text-gray-400 mt-4">
              {description}
              <Link to={path} className="text-blue-500 hover:underline">
                <p className="font-medium text-primary hover:underline cursor-pointer">
                  {textRoute}
                </p>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {inputs.map(input => (
              <div key={input.id} className="space-y-2">
                <Label className="text-xs" htmlFor={input.id}>
                  {input.label}
                </Label>
                <div className="relative">
                  <Input
                    id={input.id}
                    placeholder={input.placeholder}
                    required
                    type={
                      input.type === "password"
                        ? showPassword
                          ? "text"
                          : "password"
                        : input.type
                    }
                  />
                  {input.type === "password" && (
                    <button
                      className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none"
                      onClick={togglePasswordVisibility}
                    >
                      <Icon
                        name={showPassword ? "EyeOff" : "Eye"}
                        className="h-5 w-5 text-gray-400"
                      />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              {textButton}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
