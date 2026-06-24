import React from 'react'
import { AddReadingBtn, AddReadingContainer, AddReadingForm, AddReadingInput, AddReadingTitle } from './AddReading.styled'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { finishBooksReadingThunk, startBooksReadingThunk } from '../../../redux/bookSlice/operations'
import { selectReadingBook } from '../../../redux/bookSlice/BookSlice'
import { useModal } from '../../Modal/ModalContext'
import { ModalBookIsRead } from '../../Modal/ModalBookIsRead/ModalBookIsRead'

export const AddReading = () => {
   const {register, handleSubmit, setValue} = useForm()
   const { openModal } = useModal();
   const book = useSelector(selectReadingBook);
   console.log(book);
   
   const sessionStatus = book.progress?.at(-1)?.status;
   const sessionPage = book.progress?.at(-1)?.finishPage
   console.log(sessionPage);
   const isReading = sessionStatus === "active";
   const dispatch = useDispatch()
   
    const submit = (data) => {
      if (isReading) {
        dispatch(finishBooksReadingThunk({
          id: book._id,
          page: data.page,
        }));
      } else {
        dispatch(startBooksReadingThunk({
          id: book._id,
          page: data.page,
        }));
      }
      setValue("page", "");
    };
   const searchModal = ()=>{
      if (sessionPage === book.totalPages) {
      openModal(<ModalBookIsRead />)}
      else {
        return;
      }
    }
  return (
    <AddReadingContainer>
      <AddReadingTitle>{isReading ? 'Stop page:' : 'Start page:'}</AddReadingTitle>
      <AddReadingForm action="" onSubmit={handleSubmit(submit)}>
        <AddReadingInput type="number" placeholder='Page number:' {...register("page", { valueAsNumber: true })} />
        <AddReadingBtn type='submit' onClick={searchModal()}>{isReading ? 'To stop' : 'To start'}</AddReadingBtn>
      </AddReadingForm>
    </AddReadingContainer>
  )
}
