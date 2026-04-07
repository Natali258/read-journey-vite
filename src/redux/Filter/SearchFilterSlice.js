import { createSlice } from '@reduxjs/toolkit';
import React from 'react'

const initialState = {
  filter: {
    title: '',
    author: ''
  },
};

const SearchFilterSlice = createSlice({
  name: 'searchFilter',
  initialState,
  selectors: {
    selectSearchFilter: state => state.filter
    },
  reducers: {
    setTitleFilter: (state, action) => {
      state.filter.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.filter.author = action.payload;
    },
    resetFilters: state => {
      state.filter = { title: '', author: '' };
    },
  },
})

export const { setTitleFilter, setAuthorFilter, resetFilters } =
  SearchFilterSlice.actions;
export const {selectSearchFilter} = SearchFilterSlice.selectors;
export const searchFilterReducer = SearchFilterSlice.reducer;