import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTriler } from "../Utils/moviesSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //   console.log(movieId);
  const selector = useSelector((store) => store.movies?.trailer);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTIONS
    );

    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    //console.log(firstTriler);
    dispatch(addTriler(trailer));
    //console.log(json);
  };

  useEffect(() => {
    //memmoizization making api calls when only their is no data in store
    !selector && getMovieVideos();
  }, []);
};
export default useMovieTrailer;
