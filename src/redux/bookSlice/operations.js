import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axiosConfig/api";
import { toast } from "react-toastify";

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
  async (credentials) => {
    console.log(credentials);
    try {
      const {data} = await api.post(`books/add`, credentials);
      console.log(data);
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
); 

export const addOwnBooksThunk = createAsyncThunk(
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

export const getInfoBookThunk = createAsyncThunk(
  "books/getInfoBook",
  async (id) => {
    try {
      const { data } = await api.get(`books/${id}`);
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
);

export const booksReadingStartThunk = createAsyncThunk(
  "books/postBooksReadingStart",
  async credentials => {
    try {
      const { data } = await api.post(`books/reading/start`, credentials);
      console.log(data);
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
);

export const booksReadingFinishThunk = createAsyncThunk(
  "books/postBooksReadingFinish",
  async (id) => {
    try {
      const { data } = await api.post(`books/reading/finish/${id}`);
      console.log(data);
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
);