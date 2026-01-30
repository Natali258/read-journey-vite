import React from 'react'
import { Outlet } from 'react-router-dom'
import { StlAuthLayoutContainer } from './AuthLayout.styled'

export const AuthLayout = () => {
  return (
    <StlAuthLayoutContainer>
        <Outlet/>
    </StlAuthLayoutContainer>
  )
}
