import { configureStore } from "@reduxjs/toolkit";
import {
  actionTypes,
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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [actionTypes.LOGIN, actionTypes.AUTH_LINK_ERROR],
      },
    }),
});

export default store;
