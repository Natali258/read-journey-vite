import React from 'react'
import { StlUserContainer, StlUserName, StlUserPhoto } from './UserBar.styled'

export const UserBar = () => {
  return (
    <StlUserContainer>
        <StlUserPhoto>
            I
        </StlUserPhoto>
        <StlUserName>Ilona Ratushniak</StlUserName>
    </StlUserContainer>
  )
}
