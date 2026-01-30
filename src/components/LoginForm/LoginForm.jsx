import React from 'react'
import Logo from '../Logo/Logo'
import { StlBtnLogin, StlFieldsLogin, StlFormLogin, StlInputLogin, StlLoginContainer, StlNavLinkRegister, StlTitleLogin } from './LoginForm.styled'

const LoginForm = () => {
  return (
    <StlLoginContainer>
        <Logo/>
        <StlTitleLogin>Expand your mind, reading <span>a book</span></StlTitleLogin>
        <StlFormLogin action="">
            <StlFieldsLogin>
                <StlInputLogin></StlInputLogin>
                <StlInputLogin></StlInputLogin>
            </StlFieldsLogin>
            <StlBtnLogin type='submit'>Log In</StlBtnLogin>
        </StlFormLogin>
        <StlNavLinkRegister to='/register'>Don’t have an account?</StlNavLinkRegister>
    </StlLoginContainer>
  )
}

export default LoginForm