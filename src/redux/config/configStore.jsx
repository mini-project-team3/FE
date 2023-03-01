import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import tokenReducer from "../modules/Auth";
import paginationSlice from "../modules/paginationSlice";

const store = configureStore({
  reducer: { loginSlice, authToken: tokenReducer, paginationSlice },
});

export default store;
