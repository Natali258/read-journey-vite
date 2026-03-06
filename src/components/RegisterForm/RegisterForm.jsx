import React from 'react'
import Logo from '../Logo/Logo'
import { StlBtnRegister, StlFieldsRegister, StlFormRegister, StlInputRegister, StlNavLinkLogin, StlRegisterContainer, StlTitleRegister } from './RegisterForm.styled'

const RegisterForm = () => {
  return (
    <StlRegisterContainer>
        <Logo/>
        <StlTitleRegister>Expand your mind, reading <span>a book</span></StlTitleRegister>
        <StlFormRegister>
            <StlFieldsRegister>
                <StlInputRegister type="text" placeholder='Name:' />
                <StlInputRegister type="text" placeholder='Mail:'/>
                <StlInputRegister type="text" placeholder='Password:' />
            </StlFieldsRegister>
            <StlBtnRegister type='submit'>Registration</StlBtnRegister>
        </StlFormRegister>
        <StlNavLinkLogin to='/login'>Already have an account?</StlNavLinkLogin>
    </StlRegisterContainer>
  )
}
export default RegisterForm