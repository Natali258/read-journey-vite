import React from 'react'
import { Filter } from '../Filter/Filter'
import { Description } from './Description/Description'
import { Quote } from './Quote/Quote'
import { DashboardContainer } from './Dashboard.styled'

export const Dashboard = () => {
  return (
    <DashboardContainer>
        <Filter/>
        <Description/>
        <Quote/>
    </DashboardContainer>
  )
}
