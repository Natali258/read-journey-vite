import { createSlice } from "@reduxjs/toolkit";
import { getBooksThunk } from "./operations";

const initialState = {
  recommend: {
    items: [],
    page: 1,
    totalPages: 1,
    isLoading: false,
  },
  owner: {
    items: [],
  }
};

const BookSlice = createSlice({
  name: "books",
  initialState,
  selectors: {
    selectBooks: (state) => state.recommend.items,
    selectPage: (state) => state.recommend.page,
    selectTotalPages: (state) => state.recommend.totalPages,
    selectIsLoading: (state) => state.recommend.isLoading,
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
      });
  },
});

export const bookReducer = BookSlice.reducer;
export const {
  selectBooks,
  selectPage,
  selectTotalPages,
  selectIsLoading,
} = BookSlice.selectors;
