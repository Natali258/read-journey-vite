import { createStore } from "redux";
import { CounterReducer } from "./counter/reducer";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enhancer = devToolsEnhancer()
export const store = createStore(CounterReducer, enhancer)

 