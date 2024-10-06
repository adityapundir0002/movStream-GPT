import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPopularMovies: null,
    nowTopRatedMovies: null,
    nowUpComingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.nowPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.nowTopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.nowUpComingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
  addTrailerVideo,
} = moviesSlice.actions;

export default moviesSlice.reducer;
