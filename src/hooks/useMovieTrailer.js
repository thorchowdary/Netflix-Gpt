import { API_OPTIONS } from "../Utils/constants";
import { useDispatch } from "react-redux";
import { addTriler } from "../Utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //   console.log(movieId);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?",
      API_OPTIONS
    );

    const json = await data.json();
    const trailer = json.results.filter((video) => video.type === "Trailer");
    //const firstTriler = trailer[0];
    //console.log(firstTriler);
    dispatch(addTriler(trailer));
    //console.log(json);
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default useMovieTrailer;
