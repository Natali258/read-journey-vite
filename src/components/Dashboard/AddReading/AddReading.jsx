import React from 'react'
import { AddReadingBtn, AddReadingForm, AddReadingInput, AddReadingTitle } from './AddReading.styled'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { booksReadingStartThunk } from '../../../redux/bookSlice/operations'
import { selectReadingBook } from '../../../redux/bookSlice/BookSlice'

export const AddReading = () => {
   const {register, handleSubmit, reset} = useForm()
   const book = useSelector(selectReadingBook);
    const dispatch = useDispatch()
  
    const submit = data => {
      dispatch(booksReadingStartThunk({
        id: book._id,
        page: data.page,
      }))
      reset();
    }
  

  return (
    <div>
      <AddReadingTitle>Start page:</AddReadingTitle>
      <AddReadingForm action="" onSubmit={handleSubmit(submit)}>
        <AddReadingInput type="text" placeholder='Page number:' {...register("page")} />
        <AddReadingBtn type='submit'>To start</AddReadingBtn>
      </AddReadingForm>
    </div>
  )
}
