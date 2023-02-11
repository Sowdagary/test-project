import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cardMode from './slices/card-mode'
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist"

const persistConfig = {
    key: "root",
    storage
}
const reducers = combineReducers({
    cardMode
})
const persistReducers = persistReducer(persistConfig, reducers)
export const store = configureStore({
    reducer: persistReducers
})
