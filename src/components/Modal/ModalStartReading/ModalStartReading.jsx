import React from "react";
import {
  ModalStartReadingAuthor,
  ModalStartReadingBtn,
  ModalStartReadingContainer,
  ModalStartReadingImg,
  ModalStartReadingName,
  ModalStartReadingPage,
} from "./ModalStartReading.styled";

export const ModalStartReading = ({ book }) => {
    console.log(book);
    
  return (
    <ModalStartReadingContainer>
      <ModalStartReadingImg src={book.imageUrl} alt={book.title} />
      <ModalStartReadingName>{book.title}</ModalStartReadingName>
      <ModalStartReadingAuthor>{book.author}</ModalStartReadingAuthor>
      <ModalStartReadingPage>{book.totalPages}</ModalStartReadingPage>
      <ModalStartReadingBtn type="button" to="/reading">
        Start reading
      </ModalStartReadingBtn>
    </ModalStartReadingContainer>
  );
};
