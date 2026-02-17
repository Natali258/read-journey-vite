import React from 'react'
import { MyBookAuthor, MyBookBox, MyBookContainer, MyBookImg, MyBookName, MyBookTitle } from './MyBook.styled'

export const MyBook = () => {
  return (
    <MyBookContainer>
      <MyBookTitle>My reading</MyBookTitle>
      <MyBookBox>
        <MyBookImg src="/src/assets/img/books-title.png" alt="books-title" />
        <MyBookName>I See You Are Interested In The Dark</MyBookName>
        <MyBookAuthor>Hilarion Pavlyuk</MyBookAuthor>
        <button>Кнопка</button>
      </MyBookBox>
    </MyBookContainer>
  )
}
