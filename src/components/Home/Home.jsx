import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'

const Home = () => {
  return (<>
    <Navbar/>
    <p className="text-slate-600 font-bold m-4 ml-6 pt-8 ">Dashboard</p>
    <Dashboard/>
    </>
  )
}

export default Home