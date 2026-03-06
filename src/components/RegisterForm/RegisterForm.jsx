import React from 'react'
import Logo from '../Logo/Logo'
import { StlBtnRegister, StlFieldsRegister, StlFormRegister, StlInputRegister, StlNavLinkLogin, StlRegisterContainer, StlTitleRegister } from './RegisterForm.styled'
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/authSlice/operations';
import { useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {register, handleSubmit, reset} = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };
    
   
  return (
    <StlRegisterContainer>
        <Logo/>
        <StlTitleRegister>Expand your mind, reading <span>a book</span></StlTitleRegister>
        <StlFormRegister onSubmit={handleSubmit(submit)}>
            <StlFieldsRegister>
                <StlInputRegister type="text" placeholder='Name:' {...register('Name')} />
                <StlInputRegister type="text" placeholder='Mail:'{...register('Mail')}/>
                <StlInputRegister type="text" placeholder='Password:' {...register('Password')}/>
            </StlFieldsRegister>
            <StlBtnRegister type='submit'>Registration</StlBtnRegister>
        </StlFormRegister>
        <StlNavLinkLogin to='/login'>Already have an account?</StlNavLinkLogin>
    </StlRegisterContainer>
  )
}
export default RegisterForm