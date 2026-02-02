import React from 'react'
import { InitialState } from '../api/booksAPI'

export const RecommendedBooks = () => {
    const books = InitialState.books;
    console.log(books);
    
  return (
    <div>
        <h1>Recommended</h1>
        <div>
            <button>Left</button>
            <button>Right</button>
        </div>
        <ul>{books.map((book) => <li key={book._id}>
            <img src={book.imageUrl} alt={book.title} width="100"/>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
        </li>)}</ul>
    </div>
  )
}