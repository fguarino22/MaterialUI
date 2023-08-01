import { createSlice } from "@reduxjs/toolkit";

const initialState = { response: [] };

export const responseToDoListReducer = createSlice({
  name: "writeResponse",
  initialState,
  reducers: {
    writeResponse: (state, action) => {
      state.response = action.payload;
    },
  },
});

export const { writeResponse } = responseToDoListReducer.actions;
export default responseToDoListReducer.reducer;
