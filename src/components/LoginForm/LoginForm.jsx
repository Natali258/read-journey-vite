import React from 'react'
import Logo from '../Logo/Logo'
import { StlBtnLogin, StlFieldsLogin, StlFormLogin, StlInputLogin, StlLoginContainer, StlNavLinkRegister, StlTitleLogin } from './LoginForm.styled'
import { useForm } from 'react-hook-form'

const LoginForm = () => {
  const {register, handleSubmit, reset} = useForm()

  const submit = data => {
    console.log(data);
    reset();
  }

  return (
    <StlLoginContainer>
        <Logo/>
        <StlTitleLogin>Expand your mind, reading <span>a book</span></StlTitleLogin>
        <StlFormLogin action="" onSubmit={handleSubmit(submit)}>
            <StlFieldsLogin>
                <StlInputLogin type="text" placeholder="Mail" {...register('email')}></StlInputLogin>
                <StlInputLogin type="text" placeholder="Password" {...register('password')}></StlInputLogin>
            </StlFieldsLogin>
            <StlBtnLogin type='submit'>Log In</StlBtnLogin>
        </StlFormLogin>
        <StlNavLinkRegister to='/register'>Don’t have an account?</StlNavLinkRegister>
    </StlLoginContainer>
  )
}

export default LoginForm