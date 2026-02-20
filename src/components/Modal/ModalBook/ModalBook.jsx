import React from 'react'
import { ModalBookAuthor, ModalBookBtn, ModalBookContainer, ModalBookImg, ModalBookName, ModalBookPage } from './ModalBook.styled';

export const ModalBook = ({ book }) => {

    console.log(book);
    
  return (
    <ModalBookContainer>
        <ModalBookImg src={book.imageUrl} alt={book.title} />
        <ModalBookName>{book.title}</ModalBookName>
        <ModalBookAuthor>{book.author}</ModalBookAuthor>
        <ModalBookPage>{book.totalPages} pages</ModalBookPage>
        <ModalBookBtn>Add to library</ModalBookBtn>
    </ModalBookContainer>
  )
}
