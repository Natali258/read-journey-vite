import React from 'react'
import {Dashboard} from '../../components/Dashboard/Dashboard'
import {RecommendedBooks} from '../../components/RecommendedBooks/RecommendedBooks'
import { RecommendedPageContainer } from './RecommendedPage.styled'
import { Filter } from '../../components/Dashboard/Filter/Filter'
import { Description } from '../../components/Dashboard/Description/Description'
import { Quote } from '../../components/Dashboard/Quote/Quote'

export const RecommendedPage = () => {
  return (
    <RecommendedPageContainer>
      <Dashboard>
        <Filter/>
        <Description/>
        <Quote/>
      </Dashboard>
      <section><RecommendedBooks/></section>
    </RecommendedPageContainer>
  )
}


