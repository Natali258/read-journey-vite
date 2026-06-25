import React, { useEffect, useState } from 'react'
import { SelectFilterArrow, SelectFilterBox, SelectFilterIcon, SelectFilterLabel, SelectFilterList, SelectFilterListItem, } from './SelectFilter.styled'
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
    <SelectFilterBox onClick={toggling}>
      <SelectFilterLabel>{selectedOption?.label || placeholder}</SelectFilterLabel>
      <SelectFilterArrow $isOpen={isOpen}>
        <SelectFilterIcon name="icon-chevron-down" color="var(--main-text-color)"/>
      </SelectFilterArrow>
      {isOpen && (<SelectFilterList>{options.map((option) => (
        <SelectFilterListItem key={option.value}  onClick={onOptionClicked(option)}>
          {option.label}
        </SelectFilterListItem>
      ))}</SelectFilterList>)}
    </SelectFilterBox>
  )
}
