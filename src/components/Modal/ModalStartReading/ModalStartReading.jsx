import React from "react";
import {
  ModalStartReadingAuthor,
  ModalStartReadingContainer,
  ModalStartReadingImg,
  ModalStartReadingName,
  ModalStartReadingNavLink,
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
      <ModalStartReadingNavLink to="/reading">
        Start reading
      </ModalStartReadingNavLink>
    </ModalStartReadingContainer>
  );
};
