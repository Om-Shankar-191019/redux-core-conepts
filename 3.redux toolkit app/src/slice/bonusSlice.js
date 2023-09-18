import { createAction, createSlice } from "@reduxjs/toolkit";

const incrementByAmount = createAction("account/incrementByAmount");
const bonusSlice = createSlice({
  name: "bonus",
  initialState: {
    points: 0,
  },
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
    decrement: (state) => {
      state.points -= 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, action) => {
      if (action.payload >= 100) {
        state.points += 1;
      }
    });
  },
});

export const { increment, decrement } = bonusSlice.actions;

export default bonusSlice.reducer;
