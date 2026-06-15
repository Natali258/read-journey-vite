import React from "react";
import {
  QuoteLiImg,
  QuoteLiText,
  QuoteLiTextSpan,
  QuoteUl,
} from "./Quote.styled";

export const Quote = () => {
  return (
    <QuoteUl>
        <QuoteLiImg>
          <img src="/src/assets/img/books.png" alt="books" />
        </QuoteLiImg>
        <QuoteLiText>
          "Books are <QuoteLiTextSpan>windows</QuoteLiTextSpan> to the world,{" "}
          <br /> and reading is a journey into the unknown."
        </QuoteLiText>
      </QuoteUl>
  );
};
