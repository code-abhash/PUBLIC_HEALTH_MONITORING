import React from 'react'
import Header from './Header'
import Patient_info from './Patient_info'
import Vitals from './Vitals'
import Disease_summary from './Disease_summary'
import Navbar from '../Home/Navbar';

const Disease = () => {
  return (<>
    <div className='flex flex-col bg-blue-300'><Navbar/><Header/>
    <Patient_info/><Vitals/><Disease_summary/></div>
    </>)
}

export default Disease