// import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

// function Heart() {
//   const arrayBp=[
//     {
//       date:"01 Jan",
//       Bp:70
//     },
//     {
//       date:"02 Jan",
//       Bp:40
//     },
//     {
//       date:"03 Jan",
//       Bp:80
//     },
//     {
//       date:"04 Jan",
//       Bp:60
//     }
//     ,{
//       date:"05 Jan",
//       Bp:40
//     }
//     ,{
//       date:"06 Jan",
//       Bp:70
//     },
//     {
//       date:"07 Jan",
//       Bp:75
//     }
//   ]

//   return (
//     <>
//     <ResponsiveContainer width="100%" aspect={2}>
//       <LineChart data={arrayBp} height={400} width={500}>
//         <Legend/>
//         <Tooltip/>
//         <XAxis dataKey="date"/>
//         <YAxis />
//         <Line dataKey="Bp" stroke='black'/>
//       </LineChart>
//     </ResponsiveContainer>

//     </>
//   )
// }

// export default Heart

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const HeartRateChart = () => {
  // Hardcoded data for testing
  const dayData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
    datasets: [
      {
        label: 'Heart Rate Per Day',
        data: [70, 72, 75, 73, 71],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  const weekData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Heart Rate Per Week',
        data: [72, 75, 71, 74, 72],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1
      }
    ]
  };

  const monthData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Heart Rate Per Month',
        data: [73, 72, 74, 71],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
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

export default HeartRateChart;
