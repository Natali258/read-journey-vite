// import React from "react";
// import {
//   ModalStartReadingAuthor,
//   ModalStartReadingContainer,
//   ModalStartReadingImg,
//   ModalStartReadingName,
//   ModalStartReadingNavLink,
//   ModalStartReadingPage,
// } from "./ModalStartReading.styled";
// import placeholderBook from "../../../assets/img/add-book.png";

// export const ModalStartReading = ({ book }) => {  
//   console.log(book);
  
//   return (
//     <ModalStartReadingContainer>
//       <ModalStartReadingImg src={book.imageUrl || placeholderBook} alt={book.title} onError={(e) => {
//         e.target.onerror = null;
//         e.target.src = placeholderBook;
//       }} />
//       <ModalStartReadingName>{book.title}</ModalStartReadingName>
//       <ModalStartReadingAuthor>{book.author}</ModalStartReadingAuthor>
//       <ModalStartReadingPage>{book.totalPages}</ModalStartReadingPage>
//       <ModalStartReadingNavLink to="/reading">
//         Start reading
//       </ModalStartReadingNavLink>
//     </ModalStartReadingContainer>
//   );
// };
