//CREATE STORE FOR REDUX
import { createStore } from "redux";
import habitReducer from "./habitReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
const store = createStore(habitReducer, composeWithDevTools());
export default store;
