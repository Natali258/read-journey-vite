import React from 'react'
import { AddBookBtn, AddBookContainer, AddBookForm, AddBookInput, AddBookTitle } from './AddBook.styled'

export const AddBook = () => {
  return (
    <AddBookContainer>
        <AddBookTitle>Create your library:</AddBookTitle>
        <AddBookForm action="">
            <AddBookInput type="text" placeholder="Book title:"/>
            <AddBookInput type="text" placeholder="The author:"/>
            <AddBookInput type="text" placeholder="Number of pages:"/>
            <AddBookBtn type='submit'>Add book</AddBookBtn>
        </AddBookForm>
    </AddBookContainer>
  )
}
