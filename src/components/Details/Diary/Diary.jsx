import React from "react";
import Icon from "../../Icon/Icon";
import { DiaryHeaderContainer, DiaryIconContainer, DiaryTitle, DiaryUl } from "./Diary.styled";
import { DiaryItem } from "../DiaryItem/DiaryItem";
import { selectReadingBook } from "../../../redux/bookSlice/BookSlice";
import { useSelector } from "react-redux";


export const Diary = () => {
  const readingBook = useSelector(selectReadingBook)
  const progressBook = readingBook?.progress || [];
  console.log(readingBook);
  return (
    <div>
      <DiaryHeaderContainer>
        <DiaryTitle>Diary</DiaryTitle>
        <DiaryIconContainer>
          <Icon
              name="icon-hourglass"
              size={{ width: 20, height: 20 }}
              color="var(--main-text-color)"
            />
          <Icon
              name="icon-pie-chart"
              size={{ width: 20, height: 20 }}
              color="var(--icon-diary-color)"
              secondaryColor="var(--grey-text-color)"
            />
        </DiaryIconContainer>
      </DiaryHeaderContainer>
      <DiaryUl>
        {progressBook?.map((item, index) => (
          <DiaryItem key={index} progress={item} />
        ))}
      </DiaryUl>
    </div>
  );
};
