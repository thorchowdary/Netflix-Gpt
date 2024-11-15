import React from "react";
import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((appStore) => appStore.movies?.nowPlayingMovies);
  if (!movies) return; // initially the now playingmovie will be null this is also called "ealry return"

  const mainMovie = movies[0];
  //console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;
  //console.log(overview);

  return (
    <div>
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
