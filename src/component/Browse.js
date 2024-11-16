import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  useNowPlayingMovies();
  const toggleGptView = useSelector((store) => store.gpt?.showGptSearch);
  return (
    <div className="">
      <Header />
      {toggleGptView ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
