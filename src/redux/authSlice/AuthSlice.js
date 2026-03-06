import { createSlice } from "@reduxjs/toolkit";
import { registerThunk } from "./operations";

const initialState = {
    user: {
        name:'',
        email:''
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        console.log(state);
        
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })}
})

export const authReducer = AuthSlice.reducer;