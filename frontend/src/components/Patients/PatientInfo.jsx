// src/components/PatientInfo.jsx
import React from 'react';

const PatientInfo = () => {
  return (
    <div className=" flex flex-col gap-6 p-6">
      <h2 className="text-gray-800 text-xl font-bold">Patient_Name</h2>
      <h2 className='text-lg font-semibold'>Condition: Serious</h2>
      <h2 className='text-lg font-semibold'>Location: Delhi</h2>
      <h2 className='text-lg font-semibold'>Recent Vitals: </h2>
      <h2 className='text-lg font-semibold'>Medication: </h2>
      <h2 className='text-lg font-semibold'>Diseases: </h2>
      <h2 className='text-lg font-semibold'>Past Medical History:</h2>
    </div>
  );
};

export default PatientInfo;


