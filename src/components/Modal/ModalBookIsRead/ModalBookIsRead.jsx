import React from "react";
import {
  ModalBookIsReadContainer,
  ModalBookIsReadImg,
  ModalBookIsReadSpan,
  ModalBookIsReadText,
  ModalBookIsReadTitle,
} from "./ModalBookIsRead.styled";

export const ModalBookIsRead = () => {
  return (
    <ModalBookIsReadContainer>
      <ModalBookIsReadImg src="/src/assets/img/books70.png" alt="books70" />
      <ModalBookIsReadTitle>The book is read</ModalBookIsReadTitle>
      <ModalBookIsReadText>
        It was an <ModalBookIsReadSpan>exciting journey</ModalBookIsReadSpan>,
        where each <br /> page revealed new horizons, and the <br /> characters
        became inseparable <br /> friends.
      </ModalBookIsReadText>
    </ModalBookIsReadContainer>
  );
};
