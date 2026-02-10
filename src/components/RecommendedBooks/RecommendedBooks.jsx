import React from 'react'
import { InitialState } from '../api/booksAPI'
import { RecommendedBtn, RecommendedContainer, RecommendedContainerBtn, RecommendedList, RecommendedTitle } from './RecommendedBooks.styled';
import Icon from '../Icon/Icon';
import { RecommendedBooksItem } from '../RecommendedBooksItem/RecommendedBooksItem';

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
        <RecommendedList>{books.slice(0, 10).map((book) => <RecommendedBooksItem book={book} />)}</RecommendedList>
    </RecommendedContainer>
  )
}