import { FC } from "react";
import { Form } from "../../form/form";
import { LOGIN_INPUTS_FORM } from "../../../constants/constants";

export const LoginForm: FC = () => {
  return (
    <Form
      title="Login to FileHub"
      description="Don't have an account?"
      path="/register"
      textRoute="Register now"
      textButton="Login"
      inputs={LOGIN_INPUTS_FORM}
    />
  );
};
