import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import billReducer from "./bill"
// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  billReducer: billReducer
});
