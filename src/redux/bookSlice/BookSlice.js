import { createSlice } from "@reduxjs/toolkit";
import {
  getBooksThunk,
  getOwnBookThunk,
  removeOwnBooksThunk,
} from "./operations";

const initialState = {
  recommend: {
    items: [],
    page: 1,
    totalPages: 1,
    isLoading: false,
  },
  ownBooks: {
    items: [],
    page: 1,
    totalPages: 1,
    isLoading: false,
  },
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  selectors: {
    selectBooks: (state) => state.recommend.items,
    selectPage: (state) => state.recommend.page,
    selectTotalPages: (state) => state.recommend.totalPages,
    selectIsLoading: (state) => state.recommend.isLoading,
    selectOwnBooks: (state) => state.ownBooks.items,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksThunk.fulfilled, (state, action) => {
        state.recommend.items = action.payload.results;
        state.recommend.page = action.payload.page;
        state.recommend.totalPages = action.payload.totalPages;
        state.recommend.isLoading = false;
      })
      .addCase(getBooksThunk.pending, (state) => {
        state.recommend.isLoading = true;
      })
      .addCase(getBooksThunk.rejected, (state) => {
        state.recommend.isLoading = false;
      })
      .addCase(getOwnBookThunk.fulfilled, (state, action) => {
        state.ownBooks.items = action.payload;
        state.ownBooks.page = action.payload.page;
        state.ownBooks.totalPages = action.payload.totalPages;
        state.ownBooks.isLoading = false;
      })
      .addCase(removeOwnBooksThunk.fulfilled, (state, action) => {
        state.ownBooks.items = state.ownBooks.items.filter(
          (book) => book._id !== action.payload.id,
        );
      });
  },
});

export const bookReducer = BookSlice.reducer;
export const {
  selectBooks,
  selectPage,
  selectTotalPages,
  selectIsLoading,
  selectOwnBooks,
} = BookSlice.selectors;
