import React, { useState } from 'react'

import { NavMenu } from '../NavMenu/NavMenu'
import Logo from '../Logo/Logo'
import { UserBar } from '../UserBar/UserBar'
import { BurgerBtn, StlBtnLogOut, StlHeaderContainer } from './Header.styled'
import { useDispatch} from 'react-redux'
import { logoutThunk } from '../../redux/authSlice/operations'
import { MobileMenu } from '../MobileMenu/MobileMenu'


export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
      <BurgerBtn onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerBtn>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </StlHeaderContainer>

  )
}
