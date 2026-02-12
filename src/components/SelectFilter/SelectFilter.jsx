import React, { useState } from 'react'
import { SelectFilterArrow, SelectFilterContainer, SelectFilterList, SelectFilterListItem } from './SelectFilter.styled'
import Icon from '../Icon/Icon'

export const SelectFilter = ({ options, placeholder = "All books" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log("Вибрано:", value);
  };
  return (
    <SelectFilterContainer onClick={toggling}>{selectedOption || placeholder}
      <SelectFilterArrow $isOpen={isOpen}>
        <Icon name="icon-chevron-down" size={{width:16, height:16}} color="var(--main-text-color)"/>
      </SelectFilterArrow>
      {isOpen && (<SelectFilterList>{options.map((option) => (
        <SelectFilterListItem  onClick={onOptionClicked(option)}>
          {option}
        </SelectFilterListItem>
      ))}</SelectFilterList>)}
    </SelectFilterContainer>
  )
}
