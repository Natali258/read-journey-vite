import React from 'react'
import { ProgressImg, ProgressImgCircle, ProgressText, ProgressTitle } from './Progress.styled'

export const Progress = () => {
  return (
    <div>
      <ProgressTitle>Progress</ProgressTitle>
      <ProgressText>Here you will see when and how much you read. <br /> To record, click on the red button above.</ProgressText>
      <ProgressImgCircle>
        <ProgressImg src="/src/assets/img/progress-star.png" alt="star" />
      </ProgressImgCircle>
    </div>
  )
}
