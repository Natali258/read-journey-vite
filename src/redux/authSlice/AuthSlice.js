import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        name:'',
        email:''
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
}

const AuthSlice = createSlice()