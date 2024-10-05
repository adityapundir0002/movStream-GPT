import React from "react";
import { RiPlayLargeFill } from "react-icons/ri";
import { BsFillInfoCircleFill } from "react-icons/bs";

const MainVideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-16 absolute text-white bg-gradient-to-r from-black">
      <h2 className="font-bold text-4xl w-1/4">{title}</h2>
      <p className="text-base pt-4 w-1/4">{overview}</p>
      <div className="flex pt-3 gap-2">
        <button className="bg-white text-black px-6 flex py-2 justify-center items-center rounded-sm hover:bg-opacity-80">
          <RiPlayLargeFill /> Play
        </button>
        <button className="bg-gray-600 px-5 flex py-2 justify-center bg-opacity-50 items-center rounded-sm hover:bg-opacity-80">
          <BsFillInfoCircleFill />
          More Info
        </button>
      </div>
    </div>
  );
};

export default MainVideoTitle;
