import React, { useEffect, useRef } from "react";
import { LN } from "../Utils/languageConstant"; // Ensure this path is correct
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../Utils/gptSlice";
import openAi from "../Utils/openAi";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((store) => store.gpt.language); // Make sure this is properly updated
  const searchText = useRef(null);

  const handleLanguageChange = (event) => {
    const selectedLang = event.target.value;
    dispatch(setLanguage(selectedLang)); // Update the language in Redux store
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
  };

  const hangleGptSearch = async () => {
    console.log(searchText.current.value);

    const query =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      "only give me names of 5 movies, comma separated";
    const response = await openAi.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(response.choices);
  };

  return (
    <div className="relative z-10">
      {/* Center the form */}
      <div className="flex absolute justify-center items-center w-full z-10 py-52">
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          <input
            ref={searchText}
            type="text"
            placeholder={LN[currentLang].gpt_placeholder} // Dynamically change placeholder based on selected language
            className="p-3 rounded-md w-80 font-bold"
          />
          <button
            className="p-3 bg-red-500 rounded-md text-white"
            onClick={hangleGptSearch}
          >
            {LN[currentLang].search}{" "}
            {/* Dynamic button text based on selected language */}
          </button>
        </form>
      </div>

      {/* Language selector */}
      <div className="absolute top-4 left-4 z-[900px] px-[960px]">
        <select
          value={currentLang}
          onChange={handleLanguageChange}
          className="p-2 rounded-md cursor-pointer bg-red-500 font-bold"
        >
          <option value="eng">English</option>
          <option value="hindi">हिंदी</option>
          <option value="telugu">తెలుగు</option>
        </select>
      </div>
    </div>
  );
};

export default GptSearchBar;
