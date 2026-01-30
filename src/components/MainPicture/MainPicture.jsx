import React from 'react'
import mobilePhone from '../../assets/img/iPhone 15 Black.png'
import { StlMainImgContainer } from './MainPicture.styled'

const MainPicture = () => {
  return (
    <StlMainImgContainer>
        <img src={mobilePhone} alt="MobilePhone" />
    </StlMainImgContainer>
  )
}
export default MainPicture