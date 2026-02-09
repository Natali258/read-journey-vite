import React from 'react'
import { LibraryPageContainer } from './LibraryPage.styled'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { AddBook } from '../../components/Dashboard/AddBook/AddBook'
import { ListRecomendedBooks } from '../../components/Dashboard/ListRecomendedBooks/ListRecomendedBooks'

export const LibraryPage = () => {
  return (
    <LibraryPageContainer>
      <Dashboard>
        <AddBook/>
        <ListRecomendedBooks/>
      </Dashboard>
    </LibraryPageContainer>
  )
}
