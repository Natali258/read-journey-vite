import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setToken } from "../../axiosConfig/api";


export const registerThunk = createAsyncThunk('auth/register', async(credentials, thunkAPI) => {
    try {
        console.log(credentials);
        
     const {data} = await api.post('users/signup', credentials)
     console.log(data);
     setToken(data.token)
        return data;  
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

export const LoginThunk = createAsyncThunk('auth/login', async(credentials, thunkAPI) => {
    try {
        const {data} = await api.post('users/signin', credentials)
        setToken(data.token)
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})