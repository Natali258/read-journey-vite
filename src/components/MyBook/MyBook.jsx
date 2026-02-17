import React from 'react'
import { IconButton, Inner, MyBookAuthor, MyBookBox, MyBookContainer, MyBookName, MyBookTitle } from './MyBook.styled'

export const MyBook = () => {
  return (
    <MyBookContainer>
      <MyBookTitle>My reading</MyBookTitle>
      <MyBookBox>
        <img src="/src/assets/img/books-title.png" alt="books-title" />
        <MyBookName>I See You Are Interested In The Dark</MyBookName>
        <MyBookAuthor>Hilarion Pavlyuk</MyBookAuthor>
        <div><IconButton><Inner /></IconButton></div>
      </MyBookBox>
    </MyBookContainer>
  )
}
