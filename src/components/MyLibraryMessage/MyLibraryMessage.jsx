import React from "react";
import {
  MyLibraryMessageCircle,
  MyLibraryMessageContainer,
  MyLibraryMessageImg,
  MyLibraryMessageText,
  MyLibraryMessageTextSpan,
} from "./MyLibraryMessage.styled";
import books70 from "../../../assets/img/books70.png";

export const MyLibraryMessage = () => {
  return (
    <MyLibraryMessageContainer>
      <MyLibraryMessageCircle>
        <MyLibraryMessageImg src={books70} alt="books" />
      </MyLibraryMessageCircle>
      <MyLibraryMessageText>
        To start training, add{" "}
        <MyLibraryMessageTextSpan>some of your books</MyLibraryMessageTextSpan>{" "}
        or <br /> from the recommended ones
      </MyLibraryMessageText>
    </MyLibraryMessageContainer>
  );
};
