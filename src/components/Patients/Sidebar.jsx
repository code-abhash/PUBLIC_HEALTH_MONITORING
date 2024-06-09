// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-green-400 flex flex-col gap-4 p-6">
      <h2 className="text-xl font-medium">Patient_Name</h2>
      <p className='text-lg font-normal'>Age: 55 years</p>
      <p className='text-lg font-normal'>Height: 175 cm</p>
      <p className='text-lg font-normal'>Weight: 70 kg</p>
      <p className='text-lg font-normal'>Sex: Male</p>
    </div>
  );
};

export default Sidebar;
