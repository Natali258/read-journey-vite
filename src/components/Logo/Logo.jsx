import React from 'react'
import Icon  from '../Icon/Icon'
import { StlLogoContainer, StlLogoText } from './Logo.styled'

const Logo = () => {
  return (
    <StlLogoContainer>
        <span>
            <Icon name='icon-Logo' size={{width: 42, height: 17}} color='rgba(249, 249, 249, 1)'/>
        </span>
        <StlLogoText>read journey</StlLogoText>
    </StlLogoContainer>
  )
}
export default Logo