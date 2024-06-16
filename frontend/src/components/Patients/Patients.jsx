// src/App.jsx
import React from 'react';
import Header from './Header';
import PatientInfo from './PatientInfo';
import Sidebar from './Sidebar';
import Navbar from '../Home/Navbar';
import Footer from '../Footer';

const Patients = () => {
  return (
    <div>
        <Navbar/>
        <Header />
      <div className="flex flex-row justify-between h-screen w-full bg-gray-50">
        <PatientInfo />
        <Sidebar />
      </div>
      <Footer/>
    </div>
  );
};

export default Patients;
