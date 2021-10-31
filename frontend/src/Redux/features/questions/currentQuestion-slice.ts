import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "../../../types/interfaces";

interface CurrentQuestion {
  index: number;
  id: number;
}

const initialState: CurrentQuestion = {
  id: 1,
  index: 0,
};

const currentQuestionSlice = createSlice({
  name: "currentQuestion",
  initialState,
  reducers: {
    increment(state, action: PayloadAction<Question[]>) {
      if (state.id === action.payload.length) return state;
      state.index += 1;
      state.id += 1;
    },

    decrement(state) {
      if (state.index === 0) return state;
      state.index -= 1;
      state.id -= 1;
    },
  },
});

export const { increment, decrement } = currentQuestionSlice.actions;
export default currentQuestionSlice.reducer;
