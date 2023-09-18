import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../slices/accountSlice";
import bonudReducer from "../slices/bonusSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
    bonus: bonudReducer,
  },
});
