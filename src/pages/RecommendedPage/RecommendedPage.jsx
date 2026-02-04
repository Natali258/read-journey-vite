import React from 'react'
import {Dashboard} from '../../components/Dashboard/Dashboard'
import {RecommendedBooks} from '../../components/RecommendedBooks/RecommendedBooks'
import { RecommendedPageContainer } from './RecommendedPage.styled'

export const RecommendedPage = () => {
  return (
    <RecommendedPageContainer>
      <section><Dashboard/></section>
      <section><RecommendedBooks/></section>
    </RecommendedPageContainer>
  )
}


