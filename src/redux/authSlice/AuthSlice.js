import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./operations";

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
    selectors: {
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsLoading: state => state.isLoading,
    selectUser: state => state.user
  },
    extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
    .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })}
})

export const authReducer = AuthSlice.reducer;
export const { selectIsLoggedIn, selectIsLoading, selectUser } =
  AuthSlice.selectors;