import React from 'react'

const Patient_info = () => {
  return (
    <div className='flex flex-row justify-between bg-blue-600 '>
        <div className='font-bold m-4 ml-0'>
            Patient Id: <input type='text' placeholder='Patient Id' name='patient_id' className='bg-blue-600'></input>
        </div>
        <div className='font-bold m-4'>
            Patient Name: <input type='text' placeholder='Patient Name' name='patient_name' className=' bg-blue-600'></input>
        </div>
    </div>
  )
}

export default Patient_info