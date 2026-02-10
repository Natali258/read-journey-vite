import React from 'react'
import { MyLibraryMessageCircle, MyLibraryMessageContainer, MyLibraryMessageImg, MyLibraryMessageText, MyLibraryMessageTextSpan } from './MyLibraryMessage.styled'

export const MyLibraryMessage = () => {
  return (
    <MyLibraryMessageContainer>
        <MyLibraryMessageCircle>
            <MyLibraryMessageImg src="/src/assets/img/books70.png" alt="books" />
        </MyLibraryMessageCircle>
        <MyLibraryMessageText>To start training, add <MyLibraryMessageTextSpan>some of your books</MyLibraryMessageTextSpan> or <br /> from the recommended ones</MyLibraryMessageText>
    </MyLibraryMessageContainer>
  )
}
