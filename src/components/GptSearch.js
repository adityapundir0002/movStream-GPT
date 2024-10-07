import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSugestions from "./GptMovieSugestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img alt="Bg-img" src={BG_URL} />
      </div>
      <GptSearchBar />
      <GptMovieSugestions />
    </>
  );
};

export default GptSearch;
