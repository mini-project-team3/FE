import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentPage: 1 };

const paginationSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage(state, payload) {
      state.currentPage = payload;
    },
  },
});

export const { setCurrentPage } = paginationSlice.actions;
export default paginationSlice.reducer;
