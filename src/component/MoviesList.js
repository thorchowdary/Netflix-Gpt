import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ tittle, movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div>No movies available.</div>;
  }
  console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-bold text-white">{tittle}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex space-x-1 space-y-2 rounded-lg  bg-opacity-1">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
