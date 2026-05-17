import React, { useEffect } from 'react'
import { MyBook } from '../../components/MyBook/MyBook'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { Details } from '../../components/Details/Details'
import { AddReading } from '../../components/Dashboard/AddReading/AddReading'
import { ReadingPageContainer } from './ReadingPage.styled'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getInfoBookThunk } from '../../redux/bookSlice/operations'

export const ReadingPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoBookThunk(id));
  }, [id, dispatch]);
  return (
    <ReadingPageContainer>
        <Dashboard>
            <AddReading/>
            <Details/>
        </Dashboard>
        <MyBook/>
    </ReadingPageContainer>
  )
}
