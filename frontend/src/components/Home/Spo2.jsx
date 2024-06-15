
// import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

// function Spo2() {
//   const arrayBp=[
//     {
//       "date": "01 Jan",
//       "spo2": 98
//     },
//     {
//       "date": "02 Jan",
//       "spo2": 97
//     },
//     {
//       "date": "03 Jan",
//       "spo2": 96
//     },
//     {
//       "date": "04 Jan",
//       "spo2": 95
//     },
//     {
//       "date": "05 Jan",
//       "spo2": 97
//     },
//     {
//       "date": "06 Jan",
//       "spo2": 98
//     },
//     {
//       "date": "07 Jan",
//       "spo2": 94
//     }
//   ]
  

//   return (
//     <>
//     <ResponsiveContainer width="100%" aspect={2}>
//       <LineChart data={arrayBp} height={400} width={500}>
//       <Legend/>
//         <Tooltip/>
//         <XAxis dataKey="date"/>
//         <YAxis />
//         <Line dataKey="spo2" stroke='blue'/>
//       </LineChart>
      
//     </ResponsiveContainer>

//     </>
//   )
// }

// export default Spo2;

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const SPO2Chart = () => {
  // Hardcoded data for testing
  const dayData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
    datasets: [
      {
        label: 'SPO2 Per Day',
        data: [95, 96, 97, 98, 95],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const weekData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'SPO2 Per Week',
        data: [96, 97, 95, 98, 96],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const monthData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'SPO2 Per Month',
        data: [97, 96, 98, 95],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const [data, setData] = useState(dayData); // Default to dayData
  const [filter, setFilter] = useState('per day'); // Default filter

  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    
    if (newFilter === 'per day') {
      setData(dayData);
    } else if (newFilter === 'per week') {
      setData(weekData);
    } else if (newFilter === 'per month') {
      setData(monthData);
    }
  };

  return (
    <>
      <select value={filter} onChange={handleFilterChange}>
        <option value="per day">Per Day</option>
        <option value="per week">Per Week</option>
        <option value="per month">Per Month</option>
      </select>
      <Line data={data} />
    </>
  );
};

export default SPO2Chart;
