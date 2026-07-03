import React from "react";
import {
  ModalBookIsReadContainer,
  ModalBookIsReadImg,
  ModalBookIsReadSpan,
  ModalBookIsReadText,
  ModalBookIsReadTitle,
} from "./ModalBookIsRead.styled";
import books70 from "../../../assets/img/books70.png";

export const ModalBookIsRead = () => {
  return (
    <ModalBookIsReadContainer>
      <ModalBookIsReadImg src={books70} alt="books70" />
      <ModalBookIsReadTitle>The book is read</ModalBookIsReadTitle>
      <ModalBookIsReadText>
        It was an <ModalBookIsReadSpan>exciting journey</ModalBookIsReadSpan>,
        where each <br /> page revealed new horizons, and the <br /> characters
        became inseparable <br /> friends.
      </ModalBookIsReadText>
    </ModalBookIsReadContainer>
  );
};
