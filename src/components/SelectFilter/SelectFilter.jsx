import React, { useEffect, useState } from 'react'
import { SelectFilterArrow, SelectFilterContainer, SelectFilterList, SelectFilterListItem } from './SelectFilter.styled'
import Icon from '../Icon/Icon'
import { useDispatch } from 'react-redux';
import { getOwnBookThunk } from '../../redux/bookSlice/operations';

export const SelectFilter = ({ options, placeholder = "All books" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOwnBookThunk(selectedOption?.value || undefined));
  }, [selectedOption, dispatch]);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };
  return (
    <SelectFilterContainer onClick={toggling}>{selectedOption?.label || placeholder}
      <SelectFilterArrow $isOpen={isOpen}>
        <Icon name="icon-chevron-down" size={{width:16, height:16}} color="var(--main-text-color)"/>
      </SelectFilterArrow>
      {isOpen && (<SelectFilterList>{options.map((option) => (
        <SelectFilterListItem key={option.value}  onClick={onOptionClicked(option)}>
          {option.label}
        </SelectFilterListItem>
      ))}</SelectFilterList>)}
    </SelectFilterContainer>
  )
}
