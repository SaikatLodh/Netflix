import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reduce";



export const store = configureStore({
  reducer: { data: rootReducer },
});