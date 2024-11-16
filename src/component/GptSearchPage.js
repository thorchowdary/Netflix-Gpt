import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import Header from "./Header";
import { BG_IMG_URL } from "../Utils/constants";

const GptSearchPage = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={BG_IMG_URL}
        alt="Movie Banner"
        className="absolute" // full screen background image
      />

      {/* Header */}
      <Header />

      {/* Search Bar - Positioned above the background */}
      <GptSearchBar />

      <div className="relative z-10 py-56">
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearchPage;
