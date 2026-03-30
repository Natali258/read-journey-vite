import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, refreshThunk, registerThunk } from "./operations";

const initialState = {
    user: {
        name:'',
        email:''
    },
    token: null,
    refreshToken: null,
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
        state.user = action.payload;
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
    .addCase(logoutThunk.fulfilled, () => {
        return initialState
      })
    .addCase(refreshThunk.pending, state => {
      state.isLoading = true;
    })
    .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.refreshToken = action.payload.refreshToken;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false; 
      })
      .addCase(refreshThunk.rejected, state => {
        state.token = null;
        state.isLoading = false;
      });}
})

export const authReducer = AuthSlice.reducer;
export const { selectIsLoggedIn, selectIsLoading, selectUser } =
  AuthSlice.selectors;