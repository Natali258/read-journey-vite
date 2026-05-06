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

export const addNewBooksThunk = createAsyncThunk(
  "books/addNewBooks",
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post(`books/add`, credentials);
      console.log(data);
      
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addOwnBooksThunk = createAsyncThunk(
  "books/addOwnBooks",
  async (id, thunkApi) => {
    try {
      const { data } = await api.post(`books/add/${id}`);
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const removeOwnBooksThunk = createAsyncThunk(
  "books/removeOwnBooks",
  async (id, thunkApi) => {
    try {
      const { data } = await api.delete(`books/remove/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
