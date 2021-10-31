import { configureStore } from "@reduxjs/toolkit";
import { apiSlice, currentQuestionReducer } from "../features";

export const store = configureStore({
  reducer: {
    currentQuestion: currentQuestionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
