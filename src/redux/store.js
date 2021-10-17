import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import utilSlice from "./slices/utilSlice";

// configureStore automatically calls combineReducers and enables redux dev tools!
const store = configureStore({
  reducer: {
    user: userReducer,
    util: utilSlice,
  },
});

export default store;
