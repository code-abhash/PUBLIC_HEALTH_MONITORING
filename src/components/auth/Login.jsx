import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNotesMedical,
  faUser,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import img4 from "./img/logo.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const printdata = () => {
    console.log(username, password);
    alert("You are logged in!!");
  };
  return (
    <div className="flex flex-col m-5">
      <center>
        <img src={img4} alt="logo" className="w-16 h-auto m-4"></img>
      </center>
      <div className="flex flex-col justify-center bg-slate-600 items-center m-auto  p-5 w-full sm:w-4/5 md:w-4/6 lg:w-2/5  border rounded-md ">
        <div className=" font-mono font-bold text-4xl underline">Login</div>
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex justify-between mt-5 w-72 border-b-2">
            <input
              type="text"
              placeholder="Username"
              className="placeholder-black  bg-slate-600 w-64"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="flex justify-between mt-2 w-72 border-b-2">
            <input
              type="text"
              placeholder="Password"
              className="placeholder-black bg-slate-600 w-64"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-gray-900">
              <input type="checkbox" value="1"></input>Remember me
            </div>
            <Link to="/" className="text-blue-400">
              Forgot Password?
            </Link>
          </div>
          <button
            className="bg-blue-600 rounded-lg font-bold h-10 mt-5"
            onClick={printdata}
          >
            Login
          </button>
          <div className="flex flex-row justify-between">
            <p className="text-gray-900 ">Don't have an account?</p>
            <Link to="/signup" className="text-blue-400 ">
              Register Here!
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;