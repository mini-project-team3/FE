import { createSlice } from "@reduxjs/toolkit";

const initialState = { category: 0 };

const CategorySelect = createSlice({
  name: "categorySelect",
  initialState,
  reducers: {
    categorySelect(state, payload) {
      state.category = payload;
    },
  },
});

export const { categorySelect } = CategorySelect.actions;
export default CategorySelect.reducer;
