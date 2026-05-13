import React from "react";
import {
  AddBookBtn,
  AddBookContainer,
  AddBookForm,
  AddBookInput,
  AddBookTitle,
} from "./AddBook.styled";
import { useModal } from "../../Modal/ModalContext";
// import { ModalBookIsRead } from "../../Modal/ModalBookIsRead/ModalBookIsRead";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addNewBooksThunk } from "../../../redux/bookSlice/operations";
import { ModalGoodJob } from "../../Modal/ModalGoodJob/ModalGoodJob";



export const AddBook = () => {
  const dispatch = useDispatch();
  const { openModal } = useModal();
  const {register, handleSubmit, reset} = useForm();
  const submit = (data) => {
    dispatch(addNewBooksThunk(data))
    reset();
  }
  return (
    <AddBookContainer>
      <AddBookTitle>Create your library:</AddBookTitle>
      <AddBookForm action="" onSubmit={handleSubmit(submit)}>
        <AddBookInput type="text" placeholder="Book title:" {...register('title')}/>
        <AddBookInput type="text" placeholder="The author:" {...register('author')}/>
        <AddBookInput type="text" placeholder="Number of pages:" {...register('totalPages')}/>
        <AddBookBtn
          type="submit" onClick={()=>openModal(<ModalGoodJob />)}
        >
          Add book
        </AddBookBtn>
      </AddBookForm>
    </AddBookContainer>
  );
};
