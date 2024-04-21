import { FC } from "react";
import { Form } from "../../form/form";

export const LoginForm: FC = () => {
  const inputs = [
    {
      id: "email",
      label: "Email",
      placeholder: "m@example.com",
      type: "email",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Password",
      type: "password",
    },
  ];

  return (
    <Form
      title="Login to FileHub"
      description="Don't have an account?"
      path="/register"
      textRoute="Register now"
      textButton="Login"
      inputs={inputs}
    />
  );
};
