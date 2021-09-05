import { compose, applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";

import thunk from "redux-thunk";

import reducers from "../reducers";


export const store = createStore(reducers, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);