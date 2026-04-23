import React from 'react'
import { RecommendedBookBox, RecommendedBooksDltBtn, RecommendedBooksName, RecommendedBooksWriter, RecommendedBtnImg, RecommendedImg, RecommendedItem } from './RecommendedBooksItem.styled';
import { useModal } from '../Modal/ModalContext';
import { ModalBook } from '../Modal/ModalBook/ModalBook';
import Icon from '../Icon/Icon';



export const RecommendedBooksItem = ({ book, onDelete }) => {
  const { openModal } = useModal();
  
  return (
    <RecommendedItem key={book._id}>
      <RecommendedBtnImg onClick={() => openModal(<ModalBook book={book}/>)}>
        <RecommendedImg src={book.imageUrl} alt={book.title} width="100"/>
      </RecommendedBtnImg>
      <RecommendedBookBox>
        <RecommendedBooksName>{book.title}</RecommendedBooksName>
        <RecommendedBooksWriter>{book.author}</RecommendedBooksWriter>
      </RecommendedBookBox>
      {onDelete && (<RecommendedBooksDltBtn type='button' onClick={() => onDelete(book._id)}>
        <Icon name='icon-trash-2' size={{width: 14, height: 14}} color='var(--red-delete-color)'/>
      </RecommendedBooksDltBtn>)}
    </RecommendedItem>
  )
}
