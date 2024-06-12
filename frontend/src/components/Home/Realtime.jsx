import React from "react";
import Heart from "./Heart";
import Blood from "./Blood";
import Spo2 from "./Spo2";
import Temp from "./Temp";
import './Home.css'

const Realtime = () => {
  return (
    <>
      <div className=" flex flex-col items-center gap-5 lg:grid grid-cols-2 grid-rows-2 h-4/5 m-5">
        <div className="m-3 w-4/5 h-full border-none rounded-md real_bg ">
          <div className="m-1 lg:m-3  font-bold">
            Heart Beat(bpm)
          </div>
          <div>
            <Heart/>
          </div>
        </div>
        <div className="col-start-2 m-3 w-4/5 h-full border-none rounded-md real_bg">
          <div className="m-1 lg:m-3 font-bold">
            Blood Pressure(mm Hg)
          </div>
          <div>
            <Blood />
          </div>
        </div>
        <div className=" row-start-2 m-3 w-4/5 h-full border-none rounded-md real_bg">
          <div className="m-1 lg:m-3  font-bold">Spo2(%)</div>
          <div>
            <Spo2 />
          </div>
        </div>
        <div className=" col-start-2 row-start-2 h-full m-3 w-4/5 border-none rounded-md real_bg">
          <div className="m-1 lg:m-3 font-bold">
            Temperature(F)
          </div>
          <div>
            <Temp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Realtime;
