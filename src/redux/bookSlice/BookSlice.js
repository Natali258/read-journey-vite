import { createSlice } from '@reduxjs/toolkit';
import React from 'react'
import { getBooksThunk } from './operations';

const initialState = {
  books: [],
  page: 1,
  totalPages: 1,
  isLoading: false,
};

const BookSlice =createSlice({
  name: 'books',
  initialState,
  selectors: {
    selectBooks: state => state.books,
    selectPage: state => state.page,
    selectTotalPages: state => state.totalPages,
    selectIsLoading: state => state.isLoading
  },
  extraReducers: builder => {
    builder
    .addCase(getBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.results;
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages;
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
  export const { selectBooks, selectPage, selectTotalPages, selectIsLoading } = BookSlice.selectors;

  