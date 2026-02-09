import React from 'react'
import { InitialState } from '../api/booksAPI'
import { RecommendedBooksName, RecommendedBooksWriter, RecommendedBtn, RecommendedContainer, RecommendedContainerBtn, RecommendedImg, RecommendedItem, RecommendedList, RecommendedTitle } from './RecommendedBooks.styled';
import Icon from '../Icon/Icon';

export const RecommendedBooks = () => {
    const books = InitialState.books;
    console.log(books);
    
  return (
    <RecommendedContainer>
        <RecommendedTitle>Recommended</RecommendedTitle>
        <RecommendedContainerBtn>
            <RecommendedBtn>
                <Icon name='icon-left'size={{width: 20, height: 20}}/>
            </RecommendedBtn>
            <RecommendedBtn>
                <Icon name='icon-right'size={{width: 20, height: 20}} />
            </RecommendedBtn>
        </RecommendedContainerBtn>
        <RecommendedList>{books.slice(0, 10).map((book) => <RecommendedItem key={book._id}>
            <RecommendedImg src={book.imageUrl} alt={book.title} width="100"/>
            <RecommendedBooksName>{book.title}</RecommendedBooksName>
            <RecommendedBooksWriter>{book.author}</RecommendedBooksWriter>
        </RecommendedItem>)}</RecommendedList>
    </RecommendedContainer>
  )
}