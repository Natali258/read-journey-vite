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
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
})

export const { setFilter } =
  SearchFilterSlice.actions;
export const {selectSearchFilter} = SearchFilterSlice.selectors;
export const searchFilterReducer = SearchFilterSlice.reducer;