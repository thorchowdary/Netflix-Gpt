import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    isGptPage: false,
    language: "eng",
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    toggleGptPage: (state, action) => {
      state.isGptPage = !state.isGptPage;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { toggleGptSearchView, toggleGptPage, setLanguage } =
  gptSlice.actions;
export default gptSlice.reducer;
