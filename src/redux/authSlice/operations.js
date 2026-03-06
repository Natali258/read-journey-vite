import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setToken } from "../../axiosConfig/api";


export const registerThunk = createAsyncThunk('auth/register', async(credentials, thunkAPI) => {
    try {
     const data = await api.post('users/signup', credentials)
     setToken(data.token)
        return data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})