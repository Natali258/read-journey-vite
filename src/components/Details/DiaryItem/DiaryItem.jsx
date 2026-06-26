import React from "react";
import Icon from "../../Icon/Icon";
import progressBlock from "../../../assets/img/block.png";
import { useDispatch, useSelector } from "react-redux";
import { selectReadingBook } from "../../../redux/bookSlice/BookSlice";
import {
  DiaryBtn,
  DiaryContainerData,
  DiaryContainerLi,
  DiaryContainerPage,
  DiaryData,
  DiaryIcon,
  DiaryIconItem,
  DiaryIconItemBtn,
  DiaryMinutes,
  DiaryPages,
  DiaryPercent,
  DiaryPerPages,
} from "./DiaryItem.styled";
import { deleteReadingThunk } from "../../../redux/bookSlice/operations";

export const DiaryItem = ({ progress, book }) => {
  const dispatch = useDispatch();
  const readingBook = useSelector(selectReadingBook);
  const startDate = new Date(progress.startReading);
  const finishDate = new Date(progress.finishReading);
  const formatted = startDate.toLocaleDateString("uk-UA");
  const timeDiff = finishDate - startDate;
  const minutes = Math.round(timeDiff / (1000 * 60));
  const pagesRead = progress.finishPage - progress.startPage;
  const percent = Math.round((pagesRead / readingBook.totalPages) * 100);
  const handleDeleteProgress = (readingId) => {
    dispatch(
      deleteReadingThunk({
        bookId: book._id,
        readingId,
      }),
    );
  };

  return (
    <DiaryContainerLi>
      <DiaryIcon>
        <DiaryIconItem name="icon-block-diary" color="var(--main-text-color)" />
      </DiaryIcon>
      <DiaryContainerData>
        <DiaryData>{formatted}</DiaryData>
        <DiaryPercent>{percent}%</DiaryPercent>
        <DiaryMinutes>{minutes} minutes</DiaryMinutes>
      </DiaryContainerData>
      <DiaryContainerPage>
        <DiaryPages>{pagesRead} pages</DiaryPages>
        <div>
          <img src={progressBlock} alt="progress" />
        </div>
        <DiaryPerPages>
          {progress.speed} pages <br /> per hour
        </DiaryPerPages>
      </DiaryContainerPage>
      <DiaryBtn onClick={() => handleDeleteProgress(progress._id)}>
        <DiaryIconItemBtn name="icon-trash-2" color="var(--main-text-color)" />
      </DiaryBtn>
    </DiaryContainerLi>
  );
};
