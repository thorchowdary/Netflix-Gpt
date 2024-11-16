import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRecommendationMovies } from "../Utils/moviesSlice";
import { API_OPTIONS } from "../Utils/constants";
import MoviesList from "./MoviesList";
import { useEffect } from "react";

const GptMovieSuggestion = () => {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.recommendationMovies);

  const ListOfMovies = async () => {
    const getMovies = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=devara&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await getMovies.json();
    console.log(json.results);
    dispatch(addRecommendationMovies(json.results));
  };

  useEffect(() => {
    ListOfMovies();
  }, [dispatch]);

  return (
    <div className="py-6 bg-opacity-20">
      {/* Movie List Section */}
      <MoviesList tittle={"Movie Suggestions"} movies={movies} />
    </div>
  );
};

export default GptMovieSuggestion;
