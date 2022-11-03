import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: 0,
    sidebarImage: false,
  },
  reducers: {
    playTheSong: (state, action) => {
      state.currentSong = action.payload();
    },
    openSidebarImage: (state) => {
      state.sidebarImage = !state.sidebarImage;
    },
  },
});
