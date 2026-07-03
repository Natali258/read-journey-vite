import React from 'react'
import { ModalGoodJobCountainer, ModalGoodJobImg, ModalGoodJobSpan, ModalGoodJobText, ModalGoodJobTitle } from './ModalGoodJob.styled'
import cool from "../../../assets/img/cool.png";
export const ModalGoodJob = () => {
  return (
    <ModalGoodJobCountainer>
        <ModalGoodJobImg src={cool} alt="cool" />
        <ModalGoodJobTitle>Good job</ModalGoodJobTitle>
        <ModalGoodJobText>Your book is now in <ModalGoodJobSpan>the library!</ModalGoodJobSpan> The joy <br /> knows no bounds and now you can <br /> start your training</ModalGoodJobText>
    </ModalGoodJobCountainer>
  )
}
