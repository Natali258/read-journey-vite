import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axiosConfig/api";

export const getBooksThunk = createAsyncThunk(
  "books/getBooks",
  async ({ page = 1, limit = 10, title = "", author = "" }, thunkApi) => {
    try {
      const { data } = await api.get(
        `books/recommend?page=${page}&limit=${limit}&title=${title}&author=${author}`,
      );
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addOwnBooksThunc = createAsyncThunk(
  "books/addOwnBooks",
  async (id, thunkApi) => {
    try {
      const { data } = await api.post(`books/add/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getOwnBookThunk = createAsyncThunk(
  "books/getOwnBook",
  async (_, thunkApi) => {
    try {
      const { data } = await api.get(
        `books/own`,
      );
      console.log(data);
      // const uniqueBooks = Array.from(
      //   new Map(data.map(book => [book._id, book])).values()
      // );
      // console.log(uniqueBooks);
      // return uniqueBooks;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
