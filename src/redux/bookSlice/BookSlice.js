import { createSlice } from '@reduxjs/toolkit';
import React from 'react'
import { getBooksThunk } from './operations';

const initialState = {
  books: [],
  isLoading: false,
};

const BookSlice =createSlice({
  name: 'books',
  initialState,
  selectors: {
    selectBooks: state => state.books,
    selectIsLoading: state => state.isLoading
  },
  extraReducers: builder => {
    builder
    .addCase(getBooksThunk.fulfilled, (state, action) => {
      state.books = action.payload.results;
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
  export const { selectBooks, selectIsLoading } = BookSlice.selectors;