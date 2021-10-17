import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk("user/signUp", async (userInfo) => {
  // endpoint uses credentials (email/password) if provided.
  // otherwise, uses AUTH_TOKEN.
  // TODO:
  const response = {
    data: {
      id: userInfo.firstName,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phoneNumber: userInfo.phoneNumber,
      password: userInfo.password,
      confirmPassword: userInfo.confirmPassword,
      keepSignedIn: userInfo.keepSignedIn,
    },
  };
  return response.data;
});

export const logIn = createAsyncThunk(
  "user/logIn",
  async (credentials) => {
    const response = {
      data: {
        id: credentials.email,
        email: credentials.email,
        password: credentials.password,
      },
    };
    return response.data;
  },
  // optional object for more advanced usage
  {
    condition: (credentials) => {
      // only run the thunk if the below returns true
      return !!(localStorage.getItem("AUTH_TOKEN") || credentials);
    },
  }
);

const initialState = {
  info: null,
  isAuthenticated: false,
  status: "IDLE", // 'IDLE' | 'PENDING' | 'FULFILLED' | 'REJECTED'
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut() {
      localStorage.removeItem("AUTH_TOKEN");
      return initialState;
    },
  },
  extraReducers: {
    [logIn.pending]: (state) => {
      state.status = "PENDING";
      state.error = null;
    },
    [logIn.fulfilled]: (state, action) => {
      state.status = "FULFILLED";
      state.error = null;
      state.info = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem("AUTH_TOKEN", action.payload.token);
    },
    [logIn.rejected]: (state, action) => {
      state.status = "REJECTED";
      state.error = action.error;
    },
    [signUp.pending]: (state) => {
      state.status = "PENDING";
      state.error = null;
    },
    [signUp.fulfilled]: (state, action) => {
      state.status = "FULFILLED";
      state.error = null;
      state.info = action.payload.user;
    },
    [signUp.rejected]: (state, action) => {
      state.status = "REJECTED";
      state.error = action.error;
    },
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
