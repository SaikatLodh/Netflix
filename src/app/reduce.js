import { combineReducers } from "redux";
import { userSlice } from "../fueature/slice";


export const rootReducer = combineReducers({
  user: userSlice.reducer,
});