import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import posts from "./posts";
import auth from "./auth";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts", "auth"],
};

const rootReducer =  combineReducers({
  posts,
  auth,
});


export default persistReducer(persistConfig,rootReducer)