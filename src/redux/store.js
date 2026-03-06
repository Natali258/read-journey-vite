// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { CounterReducer } from "./counter/reducer";
import { configureStore } from "@reduxjs/toolkit";

// const enhancer = devToolsEnhancer()
// export const store = createStore(CounterReducer, enhancer)

export const store = configureStore({
    reducer: CounterReducer,
})



 