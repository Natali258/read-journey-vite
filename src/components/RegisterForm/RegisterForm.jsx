import React, { useState } from "react";
import Logo from "../Logo/Logo";
import {
  PasswordButton,
  PasswordWrapper,
  RegisterIcon,
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
  const [showPassword, setShowPassword] = useState(false);
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
          <PasswordWrapper>
            <StlInputRegister
              type={showPassword ? "text" : "password"}
              placeholder="Password:"
              {...register("password")}
            />
            <PasswordButton
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
            >
                <RegisterIcon name={showPassword ? "icon-eye-off" : "icon-eye"} color="rgba(249, 249, 249, 1)" />
            </PasswordButton>
          </PasswordWrapper>
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
