import React from 'react'
import { InitialState } from '../../api/booksAPI';
import { ListRecomendedBooksContainer, ListRecomendedBooksImg, ListRecomendedBooksLi, ListRecomendedBooksLinkContainer, ListRecomendedBooksLogoSpan, ListRecomendedBooksName, ListRecomendedBooksNavLink, ListRecomendedBooksTitle, ListRecomendedBooksUl, ListRecomendedBooksWriter } from './ListRecomendedBooks.styled';
import Icon from '../../Icon/Icon'

export const ListRecomendedBooks = () => {
    const books = InitialState.books;
  return (
    <ListRecomendedBooksContainer>
        <ListRecomendedBooksTitle>Recommended books</ListRecomendedBooksTitle>
        <ListRecomendedBooksUl>
            {books.slice(0, 3).map((book) => <ListRecomendedBooksLi key={book._id}>
                        <ListRecomendedBooksImg src={book.imageUrl} alt={book.title} width="100"/>
                        <ListRecomendedBooksName>{book.title}</ListRecomendedBooksName>
                        <ListRecomendedBooksWriter>{book.author}</ListRecomendedBooksWriter>
                    </ListRecomendedBooksLi>)}
        </ListRecomendedBooksUl>
        <ListRecomendedBooksLinkContainer>
            <ListRecomendedBooksNavLink to="/recommended">Home</ListRecomendedBooksNavLink>
            <ListRecomendedBooksLogoSpan>
                <Icon name='icon-log-in' size={{width: 24, height: 24}} color='rgba(249, 249, 249, 1)'/>
            </ListRecomendedBooksLogoSpan>
        </ListRecomendedBooksLinkContainer>
    </ListRecomendedBooksContainer>
  )
}
