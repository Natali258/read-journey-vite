import React from 'react'
// import { NavLink } from 'react-router-dom'
import { StlNavLink, StlNavUl } from './NavMenu.styled'

export const NavMenu = () => {
  return (
    // <StlNavContainer>
    //     <StlNavUl>
    //         <StlNavLink to='/recommended'>Home</StlNavLink>
    //         <StlNavLink to='/library'>My library</StlNavLink>
    //     </StlNavUl>
    // </StlNavContainer>
    <StlNavUl>
            <StlNavLink to='/recommended'>Home</StlNavLink>
            <StlNavLink to='/library'>My library</StlNavLink>
    </StlNavUl>
  )
}
