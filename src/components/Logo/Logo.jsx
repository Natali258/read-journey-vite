import React from 'react'
import Icon  from '../Icon/Icon'
import { LogoIcon, StlLogoContainer, StlLogoText } from './Logo.styled'
// import { useLocation } from 'react-router-dom';

const Logo = ({ tabletVisible=false }) => {
  console.log(tabletVisible);
  // const { pathname } = useLocation();
  
  // const showText = pathname === "/login" || pathname === "/register";
  return (
    <StlLogoContainer>
        <span>
            <LogoIcon name='icon-Logo' color='rgba(249, 249, 249, 1)'/>
        </span>
        {/* {showText &&<StlLogoText>read journey</StlLogoText>} */}
        <StlLogoText $tabletVisible={tabletVisible}>read journey</StlLogoText>
    </StlLogoContainer>
  )
}
export default Logo