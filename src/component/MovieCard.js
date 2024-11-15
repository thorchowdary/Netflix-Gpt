import React from "react";
import { IMAGE_URL } from "../Utils/constants";

const MovieCard = ({ posterPath }) => {
  //console.log(ImagePath);
  return (
    <div className="w-36">
      <img alt="imageLogo" src={IMAGE_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
