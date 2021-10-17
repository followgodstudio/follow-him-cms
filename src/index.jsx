// ie11 polyfills must be at top of index.js
// =================================================
import { ChakraProvider } from "@chakra-ui/react";
import theme from "components/CustomTheme";
import React from "react";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "redux/store";
import App from "./App";

if (process.env.NODE_ENV === "development") {
  window.ENV = {
    REC_DASH_API: "https://recdash.dev.platform.michaels.com",
  };
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
