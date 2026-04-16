import React from 'react'
import { ModalBookAuthor, ModalBookBtn, ModalBookContainer, ModalBookImg, ModalBookName, ModalBookPage } from './ModalBook.styled';
import { useDispatch } from 'react-redux';
import { addOwnBooksThunc } from '../../../redux/bookSlice/operations';

export const ModalBook = ({ book }) => {
  const dispatch = useDispatch();
    console.log(book);
    
    const handleAddToLibrary = () => {
      dispatch(addOwnBooksThunc(book._id));
    }
    
  return (
    <ModalBookContainer>
        <ModalBookImg src={book.imageUrl} alt={book.title} />
        <ModalBookName>{book.title}</ModalBookName>
        <ModalBookAuthor>{book.author}</ModalBookAuthor>
        <ModalBookPage>{book.totalPages} pages</ModalBookPage>
        <ModalBookBtn type='button' onClick={handleAddToLibrary}>Add to library</ModalBookBtn>
    </ModalBookContainer>
  )
}
