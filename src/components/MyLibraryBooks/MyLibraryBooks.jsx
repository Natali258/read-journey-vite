import React from 'react'
import { MyLibraryBooksContainer, MyLibraryBooksTitle } from './MyLibraryBooks.styled'
import { MyLibraryMessage } from '../MyLibraryMessage/MyLibraryMessage'
import { SelectFilter } from '../SelectFilter/SelectFilter'

export const MyLibraryBooks = () => {
  const options = [ "Unread", "In progress", "Done", "All books",];
  return (
    <MyLibraryBooksContainer>
      <MyLibraryBooksTitle>My library</MyLibraryBooksTitle>
      <SelectFilter options={options}/>
      <MyLibraryMessage/>
    </MyLibraryBooksContainer>
  )
}
