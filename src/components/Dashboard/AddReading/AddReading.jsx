import React from 'react'
import { AddReadingBtn, AddReadingForm, AddReadingInput, AddReadingTitle } from './AddReading.styled'

export const AddReading = () => {
  return (
    <div>
      <AddReadingTitle>Start page:</AddReadingTitle>
      <AddReadingForm action="">
        <AddReadingInput type="text" placeholder='Page number:'  />
        <AddReadingBtn type='submit'>To start</AddReadingBtn>
      </AddReadingForm>
    </div>
  )
}
