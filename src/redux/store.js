import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

// configureStore automatically calls combineReducers and enables redux dev tools!
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
