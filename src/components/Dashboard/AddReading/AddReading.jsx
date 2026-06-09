import React from 'react'
import { AddReadingBtn, AddReadingForm, AddReadingInput, AddReadingTitle } from './AddReading.styled'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { finishBooksReadingThunk, startBooksReadingThunk } from '../../../redux/bookSlice/operations'
import { selectReadingBook } from '../../../redux/bookSlice/BookSlice'

export const AddReading = () => {
   const {register, handleSubmit, setValue} = useForm()
   const book = useSelector(selectReadingBook);
   console.log(book);
   
   const lastStatus = book.progress?.at(-1)?.status;
  const isReading = lastStatus === "active";
    const dispatch = useDispatch()
   
    const onSubmit = (data) => {
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
  
  return (
    <div>
      <AddReadingTitle>{isReading ? 'Stop page:' : 'Start page:'}</AddReadingTitle>
      <AddReadingForm action="" onSubmit={handleSubmit(onSubmit)}>
        <AddReadingInput type="number" placeholder='Page number:' {...register("page", { valueAsNumber: true })} />
        <AddReadingBtn type='submit'>{isReading ? 'To stop' : 'To start'}</AddReadingBtn>
      </AddReadingForm>
    </div>
  )
}
