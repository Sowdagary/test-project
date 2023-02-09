import { TypedUseSelectorHook, useSelector } from "react-redux"
import { persistReducer, persistStore } from "redux-persist"

import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "."
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import thunkMiddleware from "redux-thunk"

//Persist config
const persistConfig = {
  key: "foodieglobal",
  storage
}

//Persisted
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
  devTools: process.env.NODE_ENV !== "production"
})

const persistor = persistStore(store)

//Getting typeof store
export type StoreType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

//UseSelector Localy
const useAppSelector: TypedUseSelectorHook<StoreType> = useSelector

export { store, persistor, useAppSelector }
