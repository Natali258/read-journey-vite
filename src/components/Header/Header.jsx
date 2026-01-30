import React from 'react'

import { NavMenu } from '../NavMenu/NavMenu'
import Logo from '../Logo/Logo'
import { UserBar } from '../UserBar/UserBar'
import { StlBtnLogOut, StlHeaderContainer } from './Header.styled'

export const Header = () => {
  return (
    <StlHeaderContainer>
      <Logo/>
      <NavMenu/>
      <UserBar/>
      <StlBtnLogOut>Log out</StlBtnLogOut>
    </StlHeaderContainer>

  )
}
