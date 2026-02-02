import React from 'react'
import {Dashboard} from '../../components/Dashboard/Dashboard'
import {RecommendedBooks} from '../../components/RecommendedBooks/RecommendedBooks'

export const RecommendedPage = () => {
  return (
    <div>
      <section><Dashboard/></section>
      <section><RecommendedBooks/></section>
    </div>
  )
}


