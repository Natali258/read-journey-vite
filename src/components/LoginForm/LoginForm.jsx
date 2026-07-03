import React, { useState } from "react";
import Logo from "../Logo/Logo";
import {
  LoginIcon,
  PasswordButton,
  PasswordWrapper,
  StlBtnLogin,
  StlFieldsLogin,
  StlFormLogin,
  StlInputLogin,
  StlLinkLogin,
  StlLoginContainer,
  StlNavLinkRegister,
  StlTitleLogin,
} from "./LoginForm.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/authSlice/operations";
import Icon from "../Icon/Icon";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginThunk(data));
    reset();
  };

  return (
    <StlLoginContainer>
      <Logo tabletVisible={true} />
      <StlTitleLogin>
        Expand your mind, reading <span>a book</span>
      </StlTitleLogin>
      <StlFormLogin action="" onSubmit={handleSubmit(submit)}>
        <StlFieldsLogin>
          <StlInputLogin
            type="text"
            placeholder="Mail"
            {...register("email")}
          ></StlInputLogin>
          <PasswordWrapper>
            <StlInputLogin
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password")}
          >
          </StlInputLogin>
          <PasswordButton
              type="button"
              onClick={() => setShowPassword(prev => !prev)}
            >
              <LoginIcon name={showPassword ? "icon-eye-off" : "icon-eye"} color="rgba(249, 249, 249, 1)" />
          </PasswordButton>
          </PasswordWrapper>
        </StlFieldsLogin>
        <StlLinkLogin>
          <StlBtnLogin type="submit">Log In</StlBtnLogin>
          <StlNavLinkRegister to="/register">
            Don’t have an account?
          </StlNavLinkRegister>
        </StlLinkLogin>
      </StlFormLogin>
      {/* <StlNavLinkRegister to='/register'>Don’t have an account?</StlNavLinkRegister> */}
    </StlLoginContainer>
  );
};

export default LoginForm;
