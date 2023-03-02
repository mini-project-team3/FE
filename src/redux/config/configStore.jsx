import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../modules/loginSlice";
import tokenReducer from "../modules/Auth";
import paginationSlice from "../modules/paginationSlice";
import CategorySelect from "../modules/CategorySelect";

const store = configureStore({
  reducer: {
    loginSlice,
    authToken: tokenReducer,
    paginationSlice,
    CategorySelect: CategorySelect,
  },
});

export default store;
