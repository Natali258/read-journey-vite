import React from 'react'
import Logo from '../Logo/Logo'
import { StlBtnLogin, StlFieldsLogin, StlFormLogin, StlInputLogin, StlLinkLogin, StlLoginContainer, StlNavLinkRegister, StlTitleLogin } from './LoginForm.styled'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../redux/authSlice/operations'

const LoginForm = () => {
  const {register, handleSubmit, reset} = useForm()
  const dispatch = useDispatch()

  const submit = data => {
    dispatch(loginThunk(data))
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
            <StlLinkLogin>
              <StlBtnLogin type='submit'>Log In</StlBtnLogin>
              <StlNavLinkRegister to='/register'>Don’t have an account?</StlNavLinkRegister>
            </StlLinkLogin>
        </StlFormLogin>
        {/* <StlNavLinkRegister to='/register'>Don’t have an account?</StlNavLinkRegister> */}
    </StlLoginContainer>
  )
}

export default LoginForm