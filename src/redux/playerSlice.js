import { createSlice } from "@reduxjs/toolkit";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: {
      id: 0,
      type: "",
      title: "",
      artist: "",
      image: "",
      src: "",
    },
    sidebarImage: false,
  },
  reducers: {
    playTheSong: (state, action) => {
      state.currentSong = action.payload;
    },
    openSidebarImage: (state) => {
      state.sidebarImage = !state.sidebarImage;
    },
  },
});

export default playerSlice.reducer;
export const { playTheSong, openSidebarImage, updateControls } =
  playerSlice.actions;
