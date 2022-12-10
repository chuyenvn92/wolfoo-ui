import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import diariesReducer from "../features/diaries/diariesSlice";
import activitiesReducer from "../features/activities/activitiesSlice";

export const store = configureStore({
  reducer: {
    diaries: diariesReducer,
    activities: activitiesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
