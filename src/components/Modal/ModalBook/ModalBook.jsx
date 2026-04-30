import React from "react";
import {
  ModalBookAuthor,
  ModalBookBtn,
  ModalBookContainer,
  ModalBookImg,
  ModalBookName,
  ModalBookNavLink,
  ModalBookPage,
} from "./ModalBook.styled";
import { useDispatch } from "react-redux";
import { addOwnBooksThunk } from "../../../redux/bookSlice/operations";
import { useNavigate } from "react-router-dom";

export const ModalBook = ({ book }) => {
  const dispatch = useDispatch();
  const isOwnBook = book.owner;
  const handleAddToLibrary = () => {
    dispatch(addOwnBooksThunk(book._id));
  };

//   const navigate = useNavigate();

// const handleStartReading = () => {
//   navigate(`/reading/${book._id}`);
// };

  return (
    <ModalBookContainer>
      <ModalBookImg src={book.imageUrl} alt={book.title} />
      <ModalBookName>{book.title}</ModalBookName>
      <ModalBookAuthor>{book.author}</ModalBookAuthor>
      <ModalBookPage>{book.totalPages} pages</ModalBookPage>
      {isOwnBook ? (
        <ModalBookNavLink to={`/reading/${book._id}`}>Start reading</ModalBookNavLink>
      ) : (
        <ModalBookBtn type="button" onClick={handleAddToLibrary}>
          Add to library
        </ModalBookBtn>
      )}
    </ModalBookContainer>
  );
};
