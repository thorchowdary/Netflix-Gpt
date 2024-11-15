import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import {
  handlePasswordValidation,
  handleEmailValidation,
} from "../Utils/formValidation";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const [errorEmailMessaga, setEmailerrorMessage] = useState();
  const [errorPasswordMessaga, setPassworderrorMessage] = useState();

  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const handleButton = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const emailValidate = handleEmailValidation(email.current.value);
    const passwordValidate = handlePasswordValidation(password.current.value);
    setEmailerrorMessage(emailValidate);
    setPassworderrorMessage(passwordValidate);
    navigate("/browse");
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="logo"
        ></img>
      </div>

      <div className="align-middle">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute bg-black my-36 p-12 w-3/12 mx-auto right-0 left-0 text-white bg-opacity-80"
        >
          <h2 className="font-bold text-3xl py-4 px-2">
            {!isSignInForm ? "Sign Up" : "Sign In"}
          </h2>
          <div className="flex flex-col align-middle">
            <div>
              {!isSignInForm && (
                <input
                  type="text"
                  placeholder="Fullname"
                  className="p-2 m-2 bg-gray-700 rounded-sm"
                ></input>
              )}
            </div>

            <div>
              <input
                ref={email}
                type="text"
                placeholder="Email or mobile number"
                className="p-2 m-2 bg-gray-700  "
              ></input>
            </div>
            <p className="text-red-400">
              {errorEmailMessaga && "enter valid email id"}
            </p>
            <div>
              <input
                ref={password}
                type="password"
                placeholder="password"
                className="p-2 m-2 bg-gray-700 rounded-sm"
              ></input>
            </div>
            <p className="text-red-400">
              {errorPasswordMessaga && "enter valid password"}
            </p>
            <div className="">
              <button
                className="px-[78px] py-2 m-2 bg-red-700 align-middle"
                onClick={handleButton}
              >
                {!isSignInForm ? "sign Up" : "sign in"}
              </button>
            </div>
            <div>
              <h4 className="px-[99px]">OR</h4>
            </div>
            <div className="bg-gray-700 align-middle px-8 h-7 mx-3">
              <button>Use a sign-in code</button>
            </div>
            <div className="px-6 m-5">
              <h4>
                <Link>Forget password?</Link>
              </h4>
            </div>
            <div className="flex flex-wrap space-x-3">
              <div>
                <input type="checkbox"></input>
              </div>
              <div>Remember me</div>
            </div>
          </div>
          <div className="my-3 cursor-pointer">
            <h4 onClick={toggleSignInForm}>
              {!isSignInForm
                ? "New to Netflix? Sign up now."
                : "Already a user. Sign In"}
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
