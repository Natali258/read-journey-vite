import React from "react";
import Logo from "../Logo/Logo";
import {
  StlBtnRegister,
  StlFieldsRegister,
  StlFormRegister,
  StlInputRegister,
  StlLinkRegister,
  StlNavLinkLogin,
  StlRegisterContainer,
  StlTitleRegister,
} from "./RegisterForm.styled";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/authSlice/operations";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(registerThunk(data));
    reset();
  };

  return (
    <StlRegisterContainer>
      <Logo tabletVisible={true} />
      <StlTitleRegister>
        Expand your mind, reading <span>a book</span>
      </StlTitleRegister>
      <StlFormRegister onSubmit={handleSubmit(submit)}>
        <StlFieldsRegister>
          <StlInputRegister
            type="text"
            placeholder="Name:"
            {...register("name")}
          />
          <StlInputRegister
            type="text"
            placeholder="Mail:"
            {...register("email")}
          />
          <StlInputRegister
            type="text"
            placeholder="Password:"
            {...register("password")}
          />
        </StlFieldsRegister>
        <StlLinkRegister>
          <StlBtnRegister type="submit">Registration</StlBtnRegister>
          <StlNavLinkLogin to="/login">Already have an account?</StlNavLinkLogin>
        </StlLinkRegister>
      </StlFormRegister>
      {/* <StlNavLinkLogin to="/login">Already have an account?</StlNavLinkLogin> */}
    </StlRegisterContainer>
  );
};
export default RegisterForm;
