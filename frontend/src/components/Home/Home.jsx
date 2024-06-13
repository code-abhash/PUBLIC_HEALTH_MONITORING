import React from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Realtime from "./Realtime";
import Panel from "./Panel";
import Infobutton from "../Infobutton/Infobutton";
import "./Home.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-8 home_page bg-gray-50 text-gray-700">
      <div className="shadow-md">
        <Navbar />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold mb-2">Dashboard <Infobutton message={`This dashboard has info like:
- New Patients: It tells about new patients enrolled 
- Active Patients: It tells about the patients still active
- Total Patients: Total aptients number
- Visitors: New visitors numbers`}/></p>
        <Dashboard />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold mb-2">Disease Panel <Infobutton message={`This is disease panel with drop down to select disease.
          The health status button to go to disaese summary page`}/></p>
        <Panel />
      </div>
      <div className="p-4">
        <p className="text-xl font-bold mb-2">Real Time Analysis <Infobutton message={`This has the real time graphs showing the vitals vs days line graph.
          -Heart beat
          -blood pressure
          -spo2
          -Temperature`}/></p>
        <Realtime />
      </div>
    </div>
  );
};

export default Home;


