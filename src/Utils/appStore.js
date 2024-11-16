import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
const appStore = configureStore({
  reducer: {
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
