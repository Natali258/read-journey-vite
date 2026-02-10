import React from 'react'
import { InitialState } from '../api/booksAPI';
import { RecommendedBooksName, RecommendedBooksWriter, RecommendedImg, RecommendedItem } from './RecommendedBooksItem.styled';

export const RecommendedBooksItem = ({ book }) => {
    
  return (
    <RecommendedItem key={book._id}>
      <RecommendedImg src={book.imageUrl} alt={book.title} width="100"/>
      <RecommendedBooksName>{book.title}</RecommendedBooksName>
      <RecommendedBooksWriter>{book.author}</RecommendedBooksWriter>
    </RecommendedItem>
  )
}
