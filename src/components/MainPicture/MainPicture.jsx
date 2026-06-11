import React from 'react'
import mobilePhone from '../../assets/img/iPhone 15 Black.png'
// import mobilePhone2x from '../../assets/img/iPhone 15 Black2х.png'
import { StlMainImg, StlMainImgContainer } from './MainPicture.styled'

const MainPicture = () => {
  return (
    <StlMainImgContainer>
        <StlMainImg src={mobilePhone} alt="MobilePhone" />
    </StlMainImgContainer>
  )
}
export default MainPicture