import { useEffect } from "react";
import {
  RecommendedContainer,
  RecommendedList,
  RecommendedTitle,
} from "./RecommendedBooks.styled";
import { RecommendedBooksItem } from "../RecommendedBooksItem/RecommendedBooksItem";
import { useDispatch, useSelector } from "react-redux";
import { selectBooks, selectPage } from "../../redux/bookSlice/BookSlice";
import { getBooksThunk } from "../../redux/bookSlice/operations";
import { Pagination } from "../Pagination/Pagination";
import { selectSearchFilter } from "../../redux/Filter/SearchFilterSlice";

export const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const page = useSelector(selectPage);
  const filter = useSelector(selectSearchFilter);

  useEffect(() => {
    dispatch(getBooksThunk({ page, limit: 10, ...filter }));
  }, [dispatch, page]);

  return (
    <RecommendedContainer>
      <RecommendedTitle>Recommended</RecommendedTitle>
      <Pagination />
      <RecommendedList>
        {books.map((book) => (
          <RecommendedBooksItem key={book._id} book={book} />
        ))}
      </RecommendedList>
    </RecommendedContainer>
  );
};
