
// import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

// function Temp() {
//   const arrayBp=[
//     {
//       "date": "01 Jan",
//       "temperature_f": 98.6
//     },
//     {
//       "date": "02 Jan",
//       "temperature_f": 99.1
//     },
//     {
//       "date": "03 Jan",
//       "temperature_f": 98.3
//     },
//     {
//       "date": "04 Jan",
//       "temperature_f": 98.9
//     },
//     {
//       "date": "05 Jan",
//       "temperature_f": 99.5
//     },
//     {
//       "date": "06 Jan",
//       "temperature_f": 98.7
//     },
//     {
//       "date": "07 Jan",
//       "temperature_f": 99.2
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
//         <Line dataKey="temperature_f" stroke='brown'/>
//       </LineChart>
      
//     </ResponsiveContainer>

//     </>
//   )
// }

// export default Temp;

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const TemperatureChart = () => {
  // Hardcoded data for testing
  const dayData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
    datasets: [
      {
        label: 'Temperature Per Day',
        data: [36.5, 36.6, 36.7, 36.8, 36.5],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const weekData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Temperature Per Week',
        data: [36.6, 36.7, 36.5, 36.8, 36.6],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      }
    ]
  };

  const monthData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Temperature Per Month',
        data: [36.7, 36.6, 36.8, 36.5],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
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

export default TemperatureChart;
