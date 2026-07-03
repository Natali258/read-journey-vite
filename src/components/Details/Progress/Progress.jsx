import React from 'react'
import { ProgressContainer, ProgressImg, ProgressImgCircle, ProgressText, ProgressTitle } from './Progress.styled'
import star from "../../../assets/img/progress-star.png";

export const Progress = () => {
  return (
    <ProgressContainer>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgressText>Here you will see when and how much you read. <br /> To record, click on the red button above.</ProgressText>
      <ProgressImgCircle>
        <ProgressImg src={star} alt="star" />
      </ProgressImgCircle>
    </ProgressContainer>
  )
}
