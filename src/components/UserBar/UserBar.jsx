import React from 'react'
import { StlUserContainer, StlUserName, StlUserPhoto } from './UserBar.styled'
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/authSlice/AuthSlice';

export const UserBar = () => {
  const user = useSelector(selectUser);
  const firstLetter = user?.name?.charAt(0).toUpperCase() || "";
  return (
    <StlUserContainer>
        <StlUserPhoto>
            {firstLetter}
        </StlUserPhoto>
        <StlUserName>{user?.name}</StlUserName>
    </StlUserContainer>
  )
}
