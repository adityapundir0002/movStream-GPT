import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img alt="Bg-img" src={BG_URL} />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 mx-auto left-0 right-0 my-40 text-white  absolute bg-black w-1/4 h-3/4 bg-opacity-85"
      >
        <h1 className=" mb-3 p-2 font-bold text-3xl ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full  bg-inherit border border-gray-600 rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 w-full  bg-inherit border border-gray-600 rounded-sm"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 m-2 w-full  bg-inherit border border-gray-700 rounded-sm"
        />
        <button
          type="button"
          className="p-2 m-2 w-full text-center  bg-red-800 rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h2 className="p-2 m-1 w-full text-center">OR</h2>
        <button
          className="p-2 m-1 w-full text-center"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New To Platform? Sign Up"
            : "Already a User. Sign In"}
        </button>
        <h2 className="p-2 m-1 w-full text-center">Forgot Password?</h2>
      </form>
    </div>
  );
};

export default Login;
