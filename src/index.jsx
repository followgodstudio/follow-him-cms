// ie11 polyfills must be at top of index.js
// =================================================
import { ChakraProvider } from "@chakra-ui/react";
import theme from "components/CustomTheme";
import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, combineReducers, compose } from "redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import firebase from "firebase/compat/app";
import "firebase/auth";
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from "react-redux-firebase";
import App from "./App";

const firebaseConfig = {
  apiKey: "AIzaSyDZyOqJh06FJbNyq8UrYTeeJTN-wauhnk8",
  authDomain: "walkwithgod-73ee8.firebaseapp.com",
  databaseURL: "https://walkwithgod-73ee8.firebaseio.com",
  projectId: "walkwithgod-73ee8",
  storageBucket: "walkwithgod-73ee8.appspot.com",
  messagingSenderId: "21802022919",
  appId: "1:21802022919:web:b4513877a3c83d608092a2",
  measurementId: "G-TNHG5GNMPQ",
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

firebase.initializeApp(firebaseConfig);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReduxProvider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ReactReduxFirebaseProvider>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
