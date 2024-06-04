import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Realtime from "./Realtime";
import Panel from "./Panel";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-2 home_page">
        <div>
          <Navbar />
        </div>
        <div>
          <p className="text-slate-600 font-bold  ml-1 pt-4 ">Dashboard</p>
          <Dashboard />
        </div>
        <div>
            <p className="text-slate-600 font-bold  ml-1 ">
              Disease Panel
            </p>
            <Panel />
          </div>
        <div>
            <p className="text-slate-600 font-bold mt-20 ml-1 pt-8 ">
              Real Time Analysis
            </p>
            <Realtime />
          </div>
        <div className="flex flex-col gap-5 md:gap-20">
        </div>
      </div>
    </>
  );
};

export default Home;
