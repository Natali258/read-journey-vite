import React from "react";
import {
  FilterBtn,
  FilterContainer,
  FilterForm,
  FilterInput,
  FilterTitle,
} from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setAuthorFilter, setTitleFilter } from "../../../redux/bookSlice/BookSlice";
import { getBooksThunk } from "../../../redux/bookSlice/operations";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
        getBooksThunk({
          page: 1,
          limit: 10,
          ...filter,
        })
      );
  };
  

  return (
    <FilterContainer>
      <FilterTitle>Filters:</FilterTitle>
      <FilterForm action="" onSubmit={handleSubmit}>
        <FilterInput
          type="text"
          placeholder="Book title:"
          value={filter.title}
          onChange={(e) => dispatch(setTitleFilter(e.target.value))}
        />
        <FilterInput
          type="text"
          placeholder="The author:"
          value={filter.author}
          onChange={(e) => dispatch(setAuthorFilter(e.target.value))}
        />
        <FilterBtn type="submit">To apply</FilterBtn>
      </FilterForm>
    </FilterContainer>
  );
};
