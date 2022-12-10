import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { getPictures, IPicture } from "./activitiesAPI";

export interface ActivitiesState {
  pictures: IPicture[];
}

const initialState: ActivitiesState = {
  pictures: [],
};

export const getPicturesApi = createAsyncThunk(
  "pictures/fetchPictures",
  async () => {
    const response = await getPictures();
    return response;
  }
);

export const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPicturesApi.fulfilled, (state, action) => {
      state.pictures = action.payload as IPicture[];
    });
  },
});

export const selectPictures = (state: RootState) => state.activities.pictures;

export default activitiesSlice.reducer;
