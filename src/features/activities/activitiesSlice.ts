import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { getPictures, getDrawIn, getFindDifferent, IPicture } from "./activitiesAPI";

export interface ActivitiesState {
  pictures: IPicture[];
  drawin: IPicture[];
  findDifferent: IPicture[];
}

const initialState: ActivitiesState = {
  pictures: [],
  drawin: [],
  findDifferent: [],
};

export const getPicturesApi = createAsyncThunk(
  "pictures/fetchPictures",
  async () => {
    const response = await getPictures();
    return response;
  }
);

export const getDrawInApi = createAsyncThunk(
  "drawin/fetchDrawIn",
  async () => {
    const response = await getDrawIn();
    return response;
  }
);

export const getFindDifferentApi = createAsyncThunk(
  "findDiffent/fetchFindDifferent",
  async () => {
    const response = await getFindDifferent();
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
    builder.addCase(getDrawInApi.fulfilled, (state, action) => {
      state.drawin = action.payload as IPicture[];
    });
    builder.addCase(getFindDifferentApi.fulfilled, (state, action) => {
      state.findDifferent = action.payload as IPicture[];
    });
  },
});

export const selectPictures = (state: RootState) => state.activities.pictures;

export const selectDrawIn = (state: RootState) => state.activities.drawin;

export const selectFindDifferent = (state: RootState) => state.activities.findDifferent;

export default activitiesSlice.reducer;
