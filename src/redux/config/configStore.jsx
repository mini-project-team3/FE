import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";
import loginSlice from "../modules/loginSlice";

const store = configureStore({
  reducer: { counterSlice: counterSlice, loginSlice },
});

export default store;
