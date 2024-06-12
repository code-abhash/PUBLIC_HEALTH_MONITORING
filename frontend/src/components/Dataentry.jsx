import React, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import "./Dataentry.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Home/Navbar";

function Dataentry() {
  const navigate = useNavigate();

  const submitVal = (e) => {
    e.preventDefault();
    alert("Data is entered You are being logged out");
    navigate("/login");
  };
  const cancelVal = (e) => {
    e.preventDefault();
    alert("Your data won't be saved anymore");
    navigate("/login");
  };
  return (
    <>
      <Navbar />
      <div className="fbgimg">
        <form className="  ">
          <div className="space-y-12 mr-2 ml-2">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex flex-row justify-between">
                <h1 className="text-base font-extrabold  mt-2 leading-7 text-gray-900">
                  VITALS ENTRY PAGE
                </h1>
                <div className="col-span-full">
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              <p className=" text-sm leading-6 text-gray-800">
                This Information will be Confidential
              </p>

              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Patient ID
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent p-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="XYZ"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 ">
              <div className="mt-1 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="block font-semibold leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="heart_rate"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Doctor's Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="rate"
                      name="rate"
                      type="text"
                      className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="heart-rate"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Heart Rate (bpm)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          id="heart-rate-low"
                          name="heart-rate"
                          type="radio"
                          value="low"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Low (Less than 60)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          id="heart-rate-normal"
                          name="heart-rate"
                          type="radio"
                          value="normal"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Normal (60-100)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          id="heart-rate-high"
                          name="heart-rate"
                          type="radio"
                          value="high"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">High (Greater than 100)</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="body-temperature"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Body Temperature (°C)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="body-temperature"
                          value="normal"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Normal (36.5 - 37.5)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="body-temperature"
                          value="fever"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Fever (Greater than 37.5)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="body-temperature"
                          value="hypothermia"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">
                          Hypothermia (Less than 36.5)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="spo2"
                    className="block font-semibold text-gray-700"
                  >
                    SPO2 (%)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center">
                      <input
                        id="spo2-low"
                        name="spo2"
                        type="radio"
                        value="low"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="spo2-low"
                        className="ml-3 block font-medium text-gray-700"
                      >
                        Low (Less than 90)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="spo2-normal"
                        name="spo2"
                        type="radio"
                        value="normal"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="spo2-normal"
                        className="ml-3 block font-medium text-gray-700"
                      >
                        Normal (90-100)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="spo2-high"
                        name="spo2"
                        type="radio"
                        value="high"
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                      />
                      <label
                        htmlFor="spo2-high"
                        className="ml-3 block font-medium text-gray-700"
                      >
                        High (More than 100)
                      </label>
                    </div>
                  </div>
                </div>

                {/* <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block font-semibold leading-6 text-gray-900"
                >
                  Systolic BP(mm Hg)
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="systolic-bp"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Systolic BP (mm Hg)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="systolic-bp"
                          value="normal"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Normal (Around 120)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="systolic-bp"
                          value="elevated"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Elevated (120-129)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="systolic-bp"
                          value="hypertension-stage1"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">
                          Hypertension Stage 1 (130-139)
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block font-semibold leading-6 text-gray-900"
                >
                  Diastolic BP(mm Hg)
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
                <div className="sm:col-span-3">
                  <label
                    htmlFor="diastolic-bp"
                    className="block font-semibold leading-6 text-gray-900"
                  >
                    Diastolic BP (mm Hg)
                  </label>
                  <div className="mt-2 space-y-2">
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="diastolic-bp"
                          value="normal"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Normal (Around 80)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="diastolic-bp"
                          value="elevated"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">Elevated (80-89)</span>
                      </label>
                    </div>
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="diastolic-bp"
                          value="high"
                          className="form-radio h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2">High (90 and above)</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* <div className="sm:col-span-3">
                <label
                  htmlFor="heart_rate"
                  className="block font-semibold leading-6 text-gray-900"
                >
                  Doctor's Name
                </label>
                <div className="mt-2">
                  <input
                    id="rate"
                    name="rate"
                    type="text"
                    className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-row justify-center items-center gap-x-6">
            <button
              type="button"
              className="rounded-md bg-red-600 m-20 mr-5 px-3 py-2 text-sm  font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              onClick={cancelVal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-green-600 m-20 ml-0 px-3 py-2 text-sm  font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={submitVal}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Dataentry;

{
  /* <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block font-semibold leading-6 text-gray-900"
                >
                  Body Temperature
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="ent_clr block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */
}
