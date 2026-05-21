import React, { useState } from 'react'
import { AddReadingBtn, AddReadingForm, AddReadingInput, AddReadingTitle } from './AddReading.styled'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { finishBooksReadingThunk, startBooksReadingThunk } from '../../../redux/bookSlice/operations'
import { selectReadingBook } from '../../../redux/bookSlice/BookSlice'

export const AddReading = () => {
  const [isReading, setIsReading] = useState(false);
   const {register, handleSubmit, reset} = useForm()
   const book = useSelector(selectReadingBook);
    const dispatch = useDispatch()
   console.log(book);
   
    // const submitStart = data => {
    //   console.log(data);
    //   dispatch(startBooksReadingThunk({
    //     id: book._id,
    //     page: data.page,
    //   }))
    //   // reset();
    //   setIsReading(true);
    // }
    // const submitStop = data => {
    //   console.log(data);
      
    //   dispatch(finishBooksReadingThunk({
    //     id: book._id,
    //     page: data.page,
    //   }))
    //   // reset();
    //   setIsReading(false);
    // }

//     const onSubmit = (data) => {
//   if (isReading) {
//     submitStop(data);
//   } else {
//     submitStart(data);
//   }
//   // reset();
// };
const onSubmit = (data) => {
  if (isReading) {
    dispatch(finishBooksReadingThunk({
      id: book._id,
      page: data.page,
    }));
    setIsReading(false);
  } else {
    dispatch(startBooksReadingThunk({
      id: book._id,
      page: data.page,
    }));
    setIsReading(true);
  }

  reset();
};
  
  return (
    <div>
      <AddReadingTitle>Start page:</AddReadingTitle>
      <AddReadingForm action="" onSubmit={handleSubmit(onSubmit)}>
        <AddReadingInput type="text" placeholder='Page number:' {...register("page", { valueAsNumber: true })} />
        <AddReadingBtn type='submit'>{isReading ? 'To finish' : 'To start'}</AddReadingBtn>
      </AddReadingForm>
    </div>
  )
}
