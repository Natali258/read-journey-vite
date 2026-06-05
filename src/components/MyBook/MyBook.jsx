import React from "react";
import {
  IconButton,
  Inner,
  MyBookAuthor,
  MyBookBox,
  MyBookContainer,
  MyBookName,
  MyBookTitle,
} from "./MyBook.styled";
import { useSelector } from "react-redux";
import {
  selectReadingBook,
  selectReadingStatus,
} from "../../redux/bookSlice/BookSlice";
import placeholderBook from "../../assets/img/add-book.png";

export const MyBook = () => {
  const readingBook = useSelector(selectReadingBook);
  const readingStatus = useSelector(selectReadingStatus);
  const isActive = readingStatus === "reading";
  if (!readingBook) {
    return <p>Loading...</p>;
  }

  return (
    <MyBookContainer>
      <MyBookTitle>My reading</MyBookTitle>
      <MyBookBox>
        <img src={readingBook.imageUrl || placeholderBook} alt="books-title" />
        <MyBookName>{readingBook.title}</MyBookName>
        <MyBookAuthor>{readingBook.author}</MyBookAuthor>
        <div>
          <IconButton $active={isActive}>
            <Inner />
          </IconButton>
        </div>
      </MyBookBox>
    </MyBookContainer>
  );
};
