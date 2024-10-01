import React from "react";
import App_Logo from "../assets/app_logo.webp";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute w-screen p-4  bg-gradient-to-b from-black z-10 flex justify-between">
        <img className="w-52" alt="logo" src={App_Logo} />
        {user && (
          <div className="p-1 flex">
            <img
              className="ml-2 w-12 h-12"
              src={user?.photoURL}
              alt="USER_AVATAR"
            />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
