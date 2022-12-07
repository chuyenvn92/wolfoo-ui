import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { getDiaries, IDiary } from "./diariesAPI";

export interface DiariesState {
  diaries: IDiary[];
}

const initialState: DiariesState = {
  diaries: [],
};

export const getDiariesApi = createAsyncThunk(
  "diaries/fetchDiaries",
  async () => {
    const response = await getDiaries();
    return response;
  }
);

export const diariesSlice = createSlice({
  name: "diaries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDiariesApi.fulfilled, (state, action) => {
      state.diaries = action.payload as IDiary[];
    });
  },
});

export const selectDiaries = (state: RootState) => state.diaries.diaries;

export default diariesSlice.reducer;
