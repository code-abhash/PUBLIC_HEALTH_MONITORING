import React from 'react'
import Heart from './Heart';
import Blood from './Blood';
import Spo2 from './Spo2';
import Temp from './Temp';

const Realtime = () => {
  return ( <>
  <div className=" flex flex-col gap-5 lg:grid grid-cols-2 grid-rows-2 h-screen m-5">
  <div className="bg-white m-3 w-4/5 h-full border-none rounded-md "><div className='m-1 lg:m-3 text-red-700 font-bold'>Heart Beat(bpm)</div><div><Heart/></div></div>
  <div className="bg-white col-start-2 m-3 w-4/5 h-full border-none rounded-md"><div className='m-1 lg:m-3 text-blue-700 font-bold'>Blood Pressure(mm Hg)</div><div><Blood/></div></div>
  <div className="bg-white row-start-2 m-3 w-4/5 h-full border-none rounded-md"><div className='m-1 lg:m-3 text-green-700 font-bold'>Spo2(%)</div><div><Spo2/></div></div>
  <div className="bg-white col-start-2 row-start-2 h-full m-3 w-4/5 border-none rounded-md"><div className='m-1 lg:m-3 text-slate-700 font-bold'>Temperature(F)</div><div><Temp/></div></div>
</div>

  </>
  )
}

export default Realtime;
