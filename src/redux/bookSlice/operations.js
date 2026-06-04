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
    try {
      const {data} = await api.post(`books/add`, credentials);
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const getOwnBookThunk = createAsyncThunk(
  "books/getOwnBook",
  async (status, thunkApi) => {
    try {
      const { data } = await api.get(
        `books/own`, {
      params: status ? { status } : {},
    }
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

export const startBooksReadingThunk = createAsyncThunk(
  "books/startBooksReading",
  async credentials => {
    try {
      const { data } = await api.post(`books/reading/start`, credentials);
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
);

export const finishBooksReadingThunk = createAsyncThunk(
  "books/finishBooksReading",
  async credentials => {
    try {
      const { data } = await api.post(`books/reading/finish`, credentials);
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
);

export const deleteReadingThunk = createAsyncThunk(
  "books/deleteReading",
  async ({ bookId, readingId }) => {
    try {
      const { data } = await api.delete(`books/reading`,
        {
          params: {
            bookId,
            readingId,
          },
      });
      return data;
    } catch {
      toast.error('Something went wrong.')
    }
  },
);