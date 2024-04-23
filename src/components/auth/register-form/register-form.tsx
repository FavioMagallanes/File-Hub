import { FC } from "react";
import { Form } from "../../form/form";
import { REGISTER_INPUTS_FORM } from "../../../constants/constants";

export const RegisterForm: FC = () => {
  return (
    <Form
      title="Register to FileHub"
      description="Already registered?"
      path="/login"
      textRoute="Login now"
      textButton="Register"
      inputs={REGISTER_INPUTS_FORM}
    />
  );
};
