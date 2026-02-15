import React from 'react'
import { MyBook } from '../../components/MyBook/MyBook'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { Details } from '../../components/Details/Details'
import { AddReading } from '../../components/Dashboard/AddReading/AddReading'
import { ReadingPageContainer } from './ReadingPage.styled'

export const ReadingPage = () => {
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
