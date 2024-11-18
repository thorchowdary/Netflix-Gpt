import { API_OPTIONS } from "../Utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRated,
  addTrending,
  addUpcoming,
} from "../Utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.movies?.popular);

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    dispatch(addPopularMovies(json.results));
  };

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log("usenowplaying mvies");
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTrending(json.results));
  };

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcoming(json.results));
  };

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    //TODO:     //memmoizization making api calls when only their is no data in store

    getNowPlayingMovies();
  }, []);
  useEffect(() => {
    //memmoizization making api calls when only their is no data in store

    !selector && popularMovies();
  }, []);
  useEffect(() => {
    //TODO:     //memmoizization making api calls when only their is no data in store

    getTrendingMovies();
  });
  useEffect(() => {
    //TODO:     //memmoizization making api calls when only their is no data in store

    getUpcoming();
  });

  useEffect(() => {
    //TODO:     //memmoizization making api calls when only their is no data in store

    getTopRated();
  });
};
export default useNowPlayingMovies;
