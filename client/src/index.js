import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { compose, applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";

import reducers from "./reducers";

import App from "./App";
import "./assets/scss/styles.scss";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
