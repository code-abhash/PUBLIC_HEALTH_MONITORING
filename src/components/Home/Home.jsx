import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Realtime from './Realtime'
import Panel from './Panel'




const Home = () => {
  return (<>
    <Navbar/>
    <p className="text-slate-600 font-bold m-4 ml-6 pt-8 ">Dashboard</p>
    <Dashboard/>
    <p className="text-slate-600 font-bold m-2 ml-6 pt-8 ">Real Time Analysis</p>
    <Realtime/><div className='s:mt-36 md:mt-64'>
    <p className="text-slate-600 font-bold m-4 ml-6 pt-8 ">Disease Panel</p>
    <Panel/>
    </div>
    </>
  )
}

export default Home