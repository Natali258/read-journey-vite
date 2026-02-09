import React from 'react'
import { FilterBtn, FilterContainer, FilterForm, FilterInput, FilterTitle } from './Filter.styled'

export const Filter = () => {
  return (
    <FilterContainer>
        <FilterTitle>Filters:</FilterTitle>
        <FilterForm action="">
            <FilterInput type="text" placeholder='Book title:'/>
            <FilterInput type="text" placeholder='The author:'/>
            <FilterBtn type='submit'>To apply</FilterBtn>
        </FilterForm>
    </FilterContainer>
  )
}
