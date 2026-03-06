// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { CounterReducer } from "./counter/reducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { authReducer } from "./authSlice/AuthSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

// const enhancer = devToolsEnhancer()
// export const store = createStore(CounterReducer, enhancer)

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// export const store = configureStore({
//     reducer: CounterReducer,
// })

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer)
//   }})

// export const persistor = persistStore(store);
const persistedReducer = persistReducer(authPersistConfig, authReducer);
export const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
