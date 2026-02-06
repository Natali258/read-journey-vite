import React from 'react'
import { DescriptionContainer, DescriptionItem, DescriptionItemNumber, DescriptionItemSpan, DescriptionItemText, DescriptionList, DescriptionTitle } from './Description.styled'

export const Description = () => {
  return (
    <DescriptionContainer>
        <DescriptionTitle>Start your workout</DescriptionTitle>
            <DescriptionList>
                <DescriptionItem>
                    <DescriptionItemNumber>1</DescriptionItemNumber>
                    <DescriptionItemText> <DescriptionItemSpan>Create a personal library:</DescriptionItemSpan> add <br />the books you intend to read to it.</DescriptionItemText>
                </DescriptionItem>
                <DescriptionItem>
                    <DescriptionItemNumber>2</DescriptionItemNumber>
                    <DescriptionItemText> <DescriptionItemSpan>Create your first workout:</DescriptionItemSpan> define <br /> a goal, choose a period, start training.</DescriptionItemText>
                </DescriptionItem>
            </DescriptionList>
            <link rel="stylesheet" href="/library" />
    </DescriptionContainer>
  )
}
