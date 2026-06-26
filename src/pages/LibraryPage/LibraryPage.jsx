import React from 'react'
import { LibraryPageContainer } from './LibraryPage.styled'
import { Dashboard } from '../../components/Dashboard/Dashboard'
import { AddBook } from '../../components/Dashboard/AddBook/AddBook'
import { ListRecomendedBooks } from '../../components/Dashboard/ListRecomendedBooks/ListRecomendedBooks'
import { MyLibraryBooks } from '../../components/MyLibraryBooks/MyLibraryBooks'


export const LibraryPage = () => {
  return (
    <LibraryPageContainer>
      <Dashboard>
        <AddBook/>
        <ListRecomendedBooks/>
      </Dashboard>
      <section><MyLibraryBooks/></section>
    </LibraryPageContainer>
  )
}
