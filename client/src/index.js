import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "./store";

import App from "./App";
import Toast from "./components/Toast";

import "./assets/scss/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Toast />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
