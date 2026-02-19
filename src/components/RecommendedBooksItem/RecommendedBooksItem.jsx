import React from 'react'
import { InitialState } from '../api/booksAPI';
import { RecommendedBooksName, RecommendedBooksWriter, RecommendedBtnImg, RecommendedImg, RecommendedItem } from './RecommendedBooksItem.styled';

export const RecommendedBooksItem = ({ book }) => {
    
  return (
    <RecommendedItem key={book._id}>
      <RecommendedBtnImg>
        <RecommendedImg src={book.imageUrl} alt={book.title} width="100"/>
      </RecommendedBtnImg>
      <RecommendedBooksName>{book.title}</RecommendedBooksName>
      <RecommendedBooksWriter>{book.author}</RecommendedBooksWriter>
    </RecommendedItem>
  )
}
