import { configureStore } from "@reduxjs/toolkit";
import responseToDoListReducer from "../reducers/responseToDoListReducer";

export const store = configureStore({
  reducer: {
    responseToDoList: responseToDoListReducer,
  },
});
