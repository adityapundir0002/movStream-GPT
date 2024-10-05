import React, { useState, useRef } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isErrorMessage, setIsErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleValidation = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setIsErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/168017547?v=4",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setIsErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

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
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-2 w-full  bg-inherit border border-gray-600 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 m-2 w-full  bg-inherit border border-gray-600 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="password"
          className="p-3 m-2 w-full  bg-inherit border border-gray-700 rounded-sm"
        />
        <p className="text-red-600 font-bold text-lg">{isErrorMessage}</p>
        <button
          type="button"
          onClick={handleValidation}
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
      </form>
    </div>
  );
};

export default Login;
