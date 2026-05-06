import React, { useEffect } from 'react'
import { MyLibraryBooksContainer, MyLibraryBooksList, MyLibraryBooksTitle } from './MyLibraryBooks.styled'
import { MyLibraryMessage } from '../MyLibraryMessage/MyLibraryMessage'
import { SelectFilter } from '../SelectFilter/SelectFilter'
import { useDispatch, useSelector } from 'react-redux'
import { selectOwnBooks } from '../../redux/bookSlice/BookSlice'
import { getOwnBookThunk, removeOwnBooksThunk } from '../../redux/bookSlice/operations'
import { RecommendedBooksItem } from "../RecommendedBooksItem/RecommendedBooksItem";

export const MyLibraryBooks = () => {
  const options = [ "Unread", "In progress", "Done", "All books",];

  const dispatch = useDispatch();
  const ownerBooks = useSelector(selectOwnBooks);
  useEffect(() => {
    dispatch(getOwnBookThunk());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(removeOwnBooksThunk(id));
  };
  return (
    <MyLibraryBooksContainer>
      <MyLibraryBooksTitle>My library</MyLibraryBooksTitle>
      <SelectFilter options={options}/>
      {ownerBooks.length > 0 ? (
        <MyLibraryBooksList>
          {ownerBooks.map((book) => (
            <RecommendedBooksItem key={book._id} book={book} onDelete={handleDelete}/>
          ))}
        </MyLibraryBooksList>
        ) : (
        <MyLibraryMessage/>
      )}
    </MyLibraryBooksContainer>
  )
}
