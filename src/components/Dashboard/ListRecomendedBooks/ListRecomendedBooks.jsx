
import { InitialState } from '../../api/booksAPI';
import { ListRecomendedBooksContainer, ListRecomendedBooksImg, ListRecomendedBooksLi, ListRecomendedBooksLinkContainer, ListRecomendedBooksLogoSpan, ListRecomendedBooksName, ListRecomendedBooksNavLink, ListRecomendedBooksTitle, ListRecomendedBooksUl, ListRecomendedBooksWriter } from './ListRecomendedBooks.styled';
import Icon from '../../Icon/Icon'
import { useSelector } from 'react-redux';
import { selectBooks} from '../../../redux/bookSlice/BookSlice';
import { useMemo } from 'react';

export const ListRecomendedBooks = () => {
    const books = useSelector(selectBooks);
    const randomBooks = useMemo(() => {
        return [...books].sort(() => 0.5 - Math.random()).slice(0, 3);
    }, [books]);
    console.log(randomBooks); 

    
  return (
    <ListRecomendedBooksContainer>
        <ListRecomendedBooksTitle>Recommended books</ListRecomendedBooksTitle>
        <ListRecomendedBooksUl>
            {randomBooks.map((book) => <ListRecomendedBooksLi key={book._id}>
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
