import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { reducer } from "./reduxLogin/component/Reducer/Reducer";
import { CookiesProvider } from "react-cookie";

import thunk from "redux-thunk";
import { legacy_createStore as createStore, applyMiddleware } from "redux";

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </CookiesProvider>
);

reportWebVitals();
