import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailer: null,
    popular: null,
    trending: null,
    upcoming: null,
    topRated: null,
    recommendationMovies: null,
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTriler: (state, action) => {
      state.trailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popular = action.payload;
    },
    addTrending: (state, action) => {
      state.popular = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcoming = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addRecommendationMovies: (state, action) => {
      state.recommendationMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTriler,
  addPopularMovies,
  addTrending,
  addUpcoming,
  addTopRated,
  addRecommendationMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
