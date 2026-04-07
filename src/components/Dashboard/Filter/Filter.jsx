import React from "react";
import {
  FilterBtn,
  FilterContainer,
  FilterForm,
  FilterInput,
  FilterTitle,
} from "./Filter.styled";
import { useDispatch} from "react-redux";
import { getBooksThunk } from "../../../redux/bookSlice/operations";
import { useForm } from "react-hook-form";
import { setFilter } from "../../../redux/Filter/SearchFilterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
   const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
      author: "",
    },
  });

  const onSubmit  = (data) => {
   dispatch(setFilter(data));
    dispatch(
      getBooksThunk({
        page: 1,
        limit: 10,
        ...data,
      }),
    );
    reset();
  };

  return (
    <FilterContainer>
      <FilterTitle>Filters:</FilterTitle>
      <FilterForm action="" onSubmit={handleSubmit(onSubmit)}>
        <FilterInput
          type="text"
          placeholder="Book title:"
          {...register("title")}
        />
        <FilterInput
          type="text"
          placeholder="The author:"
          {...register("author")}
        />
        <FilterBtn type="submit">To apply</FilterBtn>
      </FilterForm>
    </FilterContainer>
  );
};
