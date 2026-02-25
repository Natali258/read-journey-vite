import React from "react";
import {
  AddBookBtn,
  AddBookContainer,
  AddBookForm,
  AddBookInput,
  AddBookTitle,
} from "./AddBook.styled";
import { useModal } from "../../Modal/ModalContext";
// import { ModalGoodJob } from '../../Modal/ModalGoodJob/ModalGoodJob';
import { ModalBookIsRead } from "../../Modal/ModalBookIsRead/ModalBookIsRead";

export const AddBook = () => {
  const { openModal } = useModal();
  return (
    <AddBookContainer>
      <AddBookTitle>Create your library:</AddBookTitle>
      <AddBookForm action="">
        <AddBookInput type="text" placeholder="Book title:" />
        <AddBookInput type="text" placeholder="The author:" />
        <AddBookInput type="text" placeholder="Number of pages:" />
        <AddBookBtn
          type="button"
          onClick={() => openModal(<ModalBookIsRead />)}
        >
          Add book
        </AddBookBtn>
      </AddBookForm>
    </AddBookContainer>
  );
};
