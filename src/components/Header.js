import React from "react";
import App_Logo from "../assets/app_logo.webp";

const Header = () => {
  return (
    <div className="absolute p-4 m-4 bg-gradient-to-b from-black z-10">
      <img className="w-52" alt="logo" src={App_Logo} />
    </div>
  );
};

export default Header;
