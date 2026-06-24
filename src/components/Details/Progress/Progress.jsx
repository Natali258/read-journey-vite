import React from 'react'
import { ProgressContainer, ProgressImg, ProgressImgCircle, ProgressText, ProgressTitle } from './Progress.styled'

export const Progress = () => {
  return (
    <ProgressContainer>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgressText>Here you will see when and how much you read. <br /> To record, click on the red button above.</ProgressText>
      <ProgressImgCircle>
        <ProgressImg src="/src/assets/img/progress-star.png" alt="star" />
      </ProgressImgCircle>
    </ProgressContainer>
  )
}
