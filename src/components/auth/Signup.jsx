import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSuitcaseMedical,
  faUser,
  faNotesMedical,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img4 from "./img/logo.jpg";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const checkpassword = () => {
    if (username !== "" && email !== "" && password !== "") {
      if (password === cpassword) {
        console.log(username, password, cpassword, email, role);
        alert("Your account got created");
        if (role === "doctor") {
          navigate("/doctor");
        }
        if (role === "nurse") {
          navigate("/nurse");
        }
      }
    } else {
      alert("Can't register and enter details properly");
      console.log(username, password, cpassword, email, role);
    }
  };
  return (
    <div className="flex flex-col m-5">
      <center>
        <img src={img4} alt="logo" className="w-16 h-auto m-4"></img>
      </center>
      <div className="flex flex-col justify-center bg-slate-600 items-center m-auto  p-5 w-full sm:w-4/5 md:w-4/6 lg:w-2/5  border rounded-md ">
        <div className=" font-mono font-bold text-4xl underline">Sign up</div>
        <div className="flex flex-col gap-3 mt-8">
          <div className="flex justify-between mt-5 w-72 border-b-2">
            <input
              type="text"
              placeholder="Username"
              className=" placeholder-black bg-slate-600 w-64"
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
          <div className="flex justify-between mt-2 w-72 border-b-2">
            <input
              type="text"
              placeholder="Confirm Password"
              className="placeholder-black bg-slate-600 w-64"
              value={cpassword}
              onChange={(e) => {
                setCpassword(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faLock} />
          </div>
          <div className="flex justify-between mt-2 w-72 border-b-2">
            <input
              type="text"
              placeholder="Email"
              className="placeholder-black bg-slate-600 w-64"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="flex justify-between mt-2 border-b-2">
            <select
              className="text-black bg-slate-600 "
              name="Role"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Occupation</option>
              <option value="doctor">Doctor</option>
              <option value="nurse">Nurse</option>
            </select>
            <FontAwesomeIcon icon={faSuitcaseMedical} />
          </div>
          <button
            className="bg-blue-600 rounded-lg h-10 font-bold  mt-8"
            onClick={checkpassword}
          >
            Register
          </button>
          <div className="flex justify-between m-5">
            <div>
              {" "}
              <p className="text-gray-900">Already have an account?</p>
            </div>
            <div>
              <Link to="/login" className="text-blue-500 ">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
