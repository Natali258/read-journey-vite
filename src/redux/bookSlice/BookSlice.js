import { createSlice } from '@reduxjs/toolkit';
import React from 'react'
import { getBooksThunk } from './operations';

const initialState = {
  books: [],
  page: 1,
  totalPages: 1,
  filter: {
    title: '',
    author: ''
  },
  isLoading: false,
};

const BookSlice =createSlice({
  name: 'books',
  initialState,
  selectors: {
    selectBooks: state => state.books,
    selectPage: state => state.page,
    selectTotalPages: state => state.totalPages,
    selectFilter: state => state.filter,
    selectIsLoading: state => state.isLoading
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
  extraReducers: builder => {
    builder
    .addCase(getBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
      state.filter.name = action.payload.filter;
      state.isLoading = false;
    })
    .addCase(getBooksThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(getBooksThunk.rejected, state => {
      state.isLoading = false;
    });
  }})

  export const bookReducer = BookSlice.reducer;
  export const { setTitleFilter, setAuthorFilter, resetFilters } =
  BookSlice.actions;
  export const { selectBooks, selectPage, selectTotalPages, selectFilter, selectIsLoading } = BookSlice.selectors;

  