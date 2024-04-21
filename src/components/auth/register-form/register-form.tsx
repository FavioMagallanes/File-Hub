import { FC } from "react";
import { Form } from "../../form/form";

export const RegisterForm: FC = () => {
  const inputs = [
    {
      id: "name",
      label: "Name",
      placeholder: "Name",
      type: "text",
    },
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
      title="Register to FileHub"
      description="Already registered?"
      path="/login"
      textRoute="Login now"
      textButton="Register"
      inputs={inputs}
    />
  );
};
