import React from "react";
import {
  QuoteLiImg,
  QuoteLiText,
  QuoteLiTextSpan,
  QuoteUl,
} from "./Quote.styled";
import books from "../../../assets/img/books.png";

export const Quote = () => {
  return (
    <QuoteUl>
        <QuoteLiImg>
          <img src={books} alt="books" />
        </QuoteLiImg>
        <QuoteLiText>
          "Books are <QuoteLiTextSpan>windows</QuoteLiTextSpan> to the world,{" "}
          <br /> and reading is a journey into the unknown."
        </QuoteLiText>
      </QuoteUl>
  );
};
