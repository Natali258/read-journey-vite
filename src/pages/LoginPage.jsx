import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import MainPicture from '../components/MainPicture/MainPicture'
import { StlLoginSectionsContainer } from './LoginPage.styled'

export const LoginPage = () => {
  return (
    <StlLoginSectionsContainer>
      <section><LoginForm/></section>
      <section><MainPicture/></section>
    </StlLoginSectionsContainer>
  )
}
