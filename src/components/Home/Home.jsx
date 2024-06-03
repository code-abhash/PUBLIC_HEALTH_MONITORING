import React from 'react'
import Navbar from './Navbar'


import Panel from './Panel'

const Home = () => {
  return (
    <>
     <Navbar/>
     <Panel/>

import Dashboard from './Dashboard'
import Realtime from './Realtime'
const Home = () => {
  return (<>
    <Navbar/>
    <p className="text-slate-600 font-bold m-4 ml-6 pt-8 ">Dashboard</p>
    <Dashboard/>
    <p className="text-slate-600 font-bold m-2 ml-6 pt-8 ">Real Time Analysis</p>
    <Realtime/>

    </>
  )
}

export default Home