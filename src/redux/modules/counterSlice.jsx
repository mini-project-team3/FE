import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogin: false };

const counterSlice = createSlice({
  name: "loginOrOut",
  initialState,
  reducers: {
    loginOrOut(state) {
      state.isLogin = !state.isLogin;
    },
  },
});

export const { loginOrOut } = counterSlice.actions;
export default counterSlice.reducer;
