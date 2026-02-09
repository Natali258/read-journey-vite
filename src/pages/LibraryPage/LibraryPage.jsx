import React from 'react'
import { LibraryPageContainer } from './LibraryPage.styled'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { AddBook } from '../../components/Dashboard/AddBook/AddBook'

export const LibraryPage = () => {
  return (
    <LibraryPageContainer>
      <Dashboard>
        <AddBook/>
      </Dashboard>
    </LibraryPageContainer>
  )
}
