import React from 'react'
import { RecommendedBooksName, RecommendedBooksWriter, RecommendedBtnImg, RecommendedImg, RecommendedItem } from './RecommendedBooksItem.styled';
import { useModal } from '../Modal/ModalContext';
import { ModalBook } from '../Modal/ModalBook/ModalBook';

export const RecommendedBooksItem = ({ book }) => {
  const { openModal } = useModal();
    
  return (
    <RecommendedItem key={book._id}>
      <RecommendedBtnImg onClick={() => openModal(<ModalBook book={book}/>)}>
        <RecommendedImg src={book.imageUrl} alt={book.title} width="100"/>
      </RecommendedBtnImg>
      <RecommendedBooksName>{book.title}</RecommendedBooksName>
      <RecommendedBooksWriter>{book.author}</RecommendedBooksWriter>
    </RecommendedItem>
  )
}
