import React from 'react'
import { Progress } from './Progress/Progress'
import { Diary } from './Diary/Diary'
import { Statistics } from './Statistics/Statistics'
import { selectReadingStatus } from '../../redux/bookSlice/BookSlice'
import { useSelector } from 'react-redux'

export const Details = () => {
  const readingStatus = useSelector(selectReadingStatus);
  console.log(readingStatus);
  
  return (
    <div>
      {readingStatus === "idle" && <Progress/>}
      {readingStatus === "reading" && <Diary/>}
      {readingStatus === "finished" && <Statistics/>}
    </div>
  )
}

