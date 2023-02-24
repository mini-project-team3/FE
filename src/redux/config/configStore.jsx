import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";

const store = configureStore({
  reducer: { counterSlice: counterSlice },
});

export default store;
