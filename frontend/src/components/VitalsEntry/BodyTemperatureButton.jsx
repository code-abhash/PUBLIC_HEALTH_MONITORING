import React, { useState } from "react";
import Infobutton from "../Infobutton/Infobutton";

const arrowStyles = `
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: inner-spin-button !important;
  opacity: 1;
  position: absolute;
  right: 2px; /* Adjust as needed */
  width: 15px; /* Adjust as needed */
  height: 100%;
}

input[type='number'] {
  -moz-appearance: textfield; /* For Firefox */
  appearance: textfield;
}

`;
const BodyTemperatureButton = () => {
  const [bodyTemp, setBodyTemp] = useState(37); // Default to average normal body temperature

  // Function to handle slider change
  const handleSliderChange = (event) => {
    setBodyTemp(event.target.value);
  };

  // Function to handle direct input change
  const handleInputChange = (event) => {
    const value = Math.max(34, Math.min(42, Number(event.target.value)));
    setBodyTemp(value);
  };

  return (
    <div className="sm:col-span-3 p-4 rounded-xl shadow-lg">
      <style>{arrowStyles}</style>
      <label
        htmlFor="body-temperature"
        className="block text-lg font-semibold leading-6 text-gray-900"
      >
        Body Temperature (°C)
        <Infobutton message="Enter Body Temperature in °C of Patients Using the slider or by typing the value directly." />
      </label>
      <div className="mt-2 flex justify-center items-center">
        <input
          type="range"
          name="body-temperature"
          id="body-temperature"
          min="34"
          max="42"
          value={bodyTemp}
          onChange={handleSliderChange}
          className="form-range h-4 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <input
          type="number"
          name="body-temperature"
          id="body-temperature"
          value={bodyTemp}
          onChange={handleInputChange}
          className="form-input ml-4 block w-24 text-center border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          min="34"
          max="42"
        />
      </div>
      <div className="mt-4 text-center">
        <span className="text-xl font-medium text-gray-900">
          Selected Temperature:{" "}
          <span className="text-indigo-600">{bodyTemp} °C</span>
        </span>
      </div>
    </div>
  );
};

export default BodyTemperatureButton;
