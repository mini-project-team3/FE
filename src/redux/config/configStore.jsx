import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../modules/counterSlice";
import loginSlice from "../modules/loginSlice";
import tokenReducer from "../modules/Auth";

const store = configureStore({
  reducer: { counterSlice: counterSlice, loginSlice, authToken: tokenReducer },
});

export default store;
