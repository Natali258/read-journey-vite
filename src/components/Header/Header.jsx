import React from 'react'

import { NavMenu } from '../NavMenu/NavMenu'
import Logo from '../Logo/Logo'
import { UserBar } from '../UserBar/UserBar'
import { StlBtnLogOut, StlHeaderContainer } from './Header.styled'
import { useDispatch} from 'react-redux'
import { logoutThunk } from '../../redux/authSlice/operations'


export const Header = () => {
  const dispatch = useDispatch()
  const logOut = () => {
      dispatch(logoutThunk())
  }
  
  
  return (
    <StlHeaderContainer>
      <Logo/>
      <NavMenu/>
      <UserBar/>
      <StlBtnLogOut onClick={logOut}>Log out</StlBtnLogOut>
    </StlHeaderContainer>

  )
}
