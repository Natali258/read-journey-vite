import React from 'react'
import { Progress } from './Progress/Progress'
import { Diary } from './Diary/Diary'
import { Statistics } from './Statistics/Statistics'
import { selectReadingBook, selectReadingStatus } from '../../redux/bookSlice/BookSlice'
import { useSelector } from 'react-redux'

export const Details = () => {
  const readingStatus = useSelector(selectReadingStatus);
  const book = useSelector(selectReadingBook);
  console.log(readingStatus);
  
  // const lastSession = book.progress?.at(-1);
  // const shouldShowProgress =
  // readingStatus === "idle" ||
  // !lastSession ||
  // !lastSession.finishPage;

  // const shouldShowDiary =
  // readingStatus === "reading" && lastSession;
  
  // return (
  //   <div>
  //     {shouldShowProgress && <Progress/>}
  //     {shouldShowDiary && <Diary/>}
  //     {readingStatus === "finished" && <Statistics/>}
  //   </div>
  // )

  const firstSession = book.progress?.[0];

if (
  readingStatus === "idle" ||
  !firstSession ||
  !firstSession.finishPage
) {
  return <Progress />;
}

if (readingStatus === "reading") {
  return <Diary />;
}

if (readingStatus === "finished") {
  return <Statistics />;
}
}

