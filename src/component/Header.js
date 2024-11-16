import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptPage } from "../Utils/gptSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const gptPageView = useSelector((store) => store.gpt?.isGptPage);

  const handleClick = () => {
    dispatch(toggleGptPage(true));
    navigate("/gpt");
  };

  const handleBrowseNetflixClick = () => {
    console.log("Browse Netflix button clicked!"); // Check if it's being triggered
    dispatch(toggleGptPage(false));
    navigate("/Browse");
  };

  return (
    <div className="absolute flex justify-between w-full p-4 z-30">
      <div>
        <img
          src="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.png"
          alt="logo"
          className="h-8 cursor-pointer"
        />
      </div>

      <div>
        {!gptPageView ? (
          <button
            onClick={handleClick}
            className="text-black bg-teal-400 font-bold w-28 py-2 px-4 text-sm rounded-md shadow-md cursor-pointer z-30"
          >
            Search Gpt
          </button>
        ) : (
          <button
            onClick={handleBrowseNetflixClick}
            className="text-black bg-teal-400 font-bold w-50 py-2 px-9 text-sm rounded-md shadow-md cursor-pointer z-30"
          >
            Browse Netflix
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
