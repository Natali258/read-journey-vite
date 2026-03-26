import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, cleanToken, setToken } from "../../axiosConfig/api";
import { toast } from "react-toastify";



export const registerThunk = createAsyncThunk('auth/register', async credentials => {
    try {
     const {data} = await api.post('users/signup', credentials)
     setToken(data.token)
        return data;  
    } catch {
        toast.error('Something went wrong.')
    }
})

export const loginThunk = createAsyncThunk('auth/login', async credentials => {
    try {
        const {data} = await api.post('users/signin', credentials)
        setToken(data.token)
        return data;
    } catch {
        toast.error('Something went wrong.') 
    }
})

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
    try {
        const {data} = await api.post('users/signout')
        cleanToken();
        toast.success("Sign out success")
        return data;
    } catch {
        toast.error('Something went wrong.') 
    }
})

export const refreshThunk = createAsyncThunk('auth/refresh', async(_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    console.log(savedToken);
    if (!savedToken) {
     return thunkApi.rejectWithValue();
    }
  try {
    setToken(savedToken);
    const { data } = await api.get('users/current');
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
})