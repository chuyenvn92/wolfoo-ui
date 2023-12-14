import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

import { getPictures, getDrawIn, getFindDifferent, getFunMatching, getMazegame, IPicture } from "./activitiesAPI";

export interface ActivitiesState {
  pictures: IPicture[];
  drawin: IPicture[];
  findDifferent: IPicture[];
  funMatching: IPicture[];
  mazeGame: IPicture[];
}

const initialState: ActivitiesState = {
  pictures: [],
  drawin: [],
  findDifferent: [],
  funMatching: [],
  mazeGame: [],
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

export const getFunMatchingApi = createAsyncThunk(
  "funMatching/fetchFunMatching",
  async () => {
    const response = await getFunMatching();
    return response;
  }
);

export const getMazegameApi = createAsyncThunk(
  "mazegame/fetchMazegame",
  async () => {
    const response = await getMazegame();
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
    builder.addCase(getFunMatchingApi.fulfilled, (state, action) => {
      state.funMatching = action.payload as IPicture[];
    });
    builder.addCase(getMazegameApi.fulfilled, (state, action) => {
      state.mazeGame = action.payload as IPicture[];
    });
  },
});

export const selectPictures = (state: RootState) => state.activities.pictures;
export const selectDrawIn = (state: RootState) => state.activities.drawin;
export const selectFindDifferent = (state: RootState) => state.activities.findDifferent;
export const selectFunMatching = (state: RootState) => state.activities.funMatching;
export const selectMazegame = (state: RootState) => state.activities.mazeGame;

export default activitiesSlice.reducer;
