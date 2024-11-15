import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movieList = useSelector((store) => store.movies);
  // const popular = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-32 relative z-20">
        <MoviesList
          tittle={"Now playing"}
          movies={movieList.nowPlayingMovies}
        />
        <MoviesList tittle={"Popular"} movies={movieList.popular} />
        <MoviesList tittle={"Up coming"} movies={movieList.upcoming} />
        <MoviesList tittle={"Top Rated"} movies={movieList.topRated} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
