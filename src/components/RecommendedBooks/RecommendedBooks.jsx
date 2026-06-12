import { useEffect} from "react";
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
import { useVisibleBooks } from "../../hooks/useVisibleBooks";

export const RecommendedBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const page = useSelector(selectPage);
  const filter = useSelector(selectSearchFilter);
  const visibleCount = useVisibleBooks();
  const visibleBooks = books.slice(0, visibleCount);
  
  useEffect(() => {
    dispatch(getBooksThunk({ page, limit: 10, ...filter }));
  }, [dispatch, page, filter]);

  return (
    <RecommendedContainer>
      <RecommendedTitle>Recommended</RecommendedTitle>
      <Pagination />
      <RecommendedList>
        {visibleBooks.map((book) => (
          <RecommendedBooksItem key={book._id} book={book} />
        ))}
      </RecommendedList>
    </RecommendedContainer>
  );
};
