import React from 'react'
import { Filter } from '../Filter/Filter'
import { Description } from './Description/Description'
import { Quote } from './Quote/Quote'

export const Dashboard = () => {
  return (
    <div>
        <Filter/>
        <Description/>
        <Quote/>
    </div>
  )
}
