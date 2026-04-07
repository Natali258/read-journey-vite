import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axiosConfig/api";

export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async ({ page = 1, limit = 10, title = "", author = "" }, thunkApi) => {
    try {
      const { data } = await api.get(
        `books/recommend?page=${page}&limit=${limit}&title=${title}&author=${author}`,
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
