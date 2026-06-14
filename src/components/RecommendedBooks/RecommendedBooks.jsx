import {
  RecommendedContainer,
  RecommendedList,
  RecommendedTitle,
} from "./RecommendedBooks.styled";
import { RecommendedBooksItem } from "../RecommendedBooksItem/RecommendedBooksItem";
import { useSelector } from "react-redux";
import { selectBooks } from "../../redux/bookSlice/BookSlice";
import { Pagination } from "../Pagination/Pagination";

export const RecommendedBooks = () => {
  const books = useSelector(selectBooks);
 
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
