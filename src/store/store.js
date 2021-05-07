import { createStore } from "redux";
import rootReducer from "./rootReducer";
var store = createStore(rootReducer);
export default store;
