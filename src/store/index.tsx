import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cardMode from "./slices/card-mode";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  cardMode,
});

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistReducers,
});
