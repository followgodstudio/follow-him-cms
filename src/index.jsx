// ie11 polyfills must be at top of index.js
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
// =================================================
import { Provider as ReduxProvider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "redux/store";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
