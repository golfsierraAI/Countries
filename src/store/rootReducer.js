import { combineReducers } from "redux";
import InitialReducer from "./Initial";
import Search from "./Search";

var rootReducer = combineReducers({
  InitialReducer: InitialReducer,
  Search: Search,
});
export default rootReducer;
