import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setToken } from "../../axiosConfig/api";
import { toast } from "react-toastify";


export const registerThunk = createAsyncThunk('auth/register', async(credentials) => {
    try {
        console.log(credentials);
        
     const {data} = await api.post('users/signup', credentials)
     console.log(data);
     setToken(data.token)
        return data;  
    } catch {
        toast.error('Something went wrong.')
    }
})

export const loginThunk = createAsyncThunk('auth/login', async(credentials) => {
    try {
        const {data} = await api.post('users/signin', credentials)
        setToken(data.token)
        return data;
    } catch {
        toast.error('Something went wrong.') 
    }
})