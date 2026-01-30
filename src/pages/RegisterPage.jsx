import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import MainPicture from '../components/MainPicture/MainPicture'
import { StlSectionsContainer } from './RegisterPage.styled'



const RegisterPage = () => {
  return (
    <StlSectionsContainer>
      <section><RegisterForm/></section>
      <section><MainPicture/></section>
    </StlSectionsContainer>
  )
}
export default RegisterPage