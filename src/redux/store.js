import { configureStore } from "@reduxjs/toolkit";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import userReducer from "./slices/userSlice";
import utilSlice from "./slices/utilSlice";

// configureStore automatically calls combineReducers and enables redux dev tools!
const store = configureStore({
  reducer: {
    user: userReducer,
    util: utilSlice,
    firebase: firebaseReducer,
  },
});

export default store;
