import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../axiosConfig/api";

export const getBooksThunk = createAsyncThunk('books/getBooks', async (_, thunkApi) => {
    try {
     const {data} = await api.get('books/recommend') 
     console.log(data);
     return data;  
    } catch (error) {
       return thunkApi.rejectWithValue(error.message); 
    }
})