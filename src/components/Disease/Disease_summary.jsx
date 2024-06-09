import React from 'react'

const Disease_summary = () => {
  return (

    <div className=" flex flex-col items-center gap-5 lg:grid grid-cols-2 grid-rows-2 h-screen m-10 bg-blue-300">
        <div className="bg-gray-400 m-3 w-4/5 h-full border-none rounded-md font-bold ">Descriptions: </div>
        <div className="bg-gray-400 m-3 w-4/5 h-full border-none rounded-md font-bold">Summary</div>
        <div className="bg-gray-400 m-3 w-4/5 h-full border-none rounded-md font-bold">Diagnosis</div>
        <div className="bg-gray-400 m-3 w-4/5 h-full border-none rounded-md font-bold">Treatment</div>
      </div>

  )
}

export default Disease_summary