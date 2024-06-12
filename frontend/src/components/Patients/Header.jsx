// src/components/Header.jsx
import React from 'react';
import patient from "./img/patient.png";

const Header = () => {
  return (
    <div className="bg-blue-400 p-4 flex justify-between items-center">
      <h1 className="text-white text-lg">#PATIENT_ID</h1>
      <button className="bg-green-500 rounded-full p-2">
        {/* Add an icon here */}
        <img
              src={patient}
              alt="Patient Icon"
              className="object-cover w-14 h-auto border border-transparent rounded-lg"
            ></img>
      </button>
    </div>
  );
};

export default Header;
