import React from 'react'
import { MyLibraryBooksContainer, MyLibraryBooksTitle } from './MyLibraryBooks.styled'
import { MyLibraryMessage } from '../MyLibraryMessage/MyLibraryMessage'
import { SelectFilter } from '../SelectFilter/SelectFilter'

export const MyLibraryBooks = () => {
  const options = ["Рекомендовані", "Моя бібліотека", "Прочитані"];
  return (
    <MyLibraryBooksContainer>
      <MyLibraryBooksTitle>My library</MyLibraryBooksTitle>
      <SelectFilter options={options}/>
      <MyLibraryMessage/>
    </MyLibraryBooksContainer>
  )
}
