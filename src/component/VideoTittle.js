import React from "react";

const VideoTittle = ({ tittle, overview }) => {
  return (
    <div className="py-[200px] px-11 absolute  text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{tittle}</h1>
      <p className="text-lg w-1/2">{overview}</p>
      <div className="flex space-x-2 py-4">
        <button className="bg-slate-500 text-white w-24 py-2 rounded-md text-center">
          Play
        </button>
        <button className="bg-slate-500 text-white w-24 py-2 rounded-md text-center">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
