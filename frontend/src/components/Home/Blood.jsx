// import React from 'react'
// import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,Tooltip,Legend} from 'recharts'

// const Blood = () => {
//     const arrayBp=[
//         {
//           "date": "01 Jan",
//           "systolic": 120,
//           "diastolic": 80
//         },
//         {
//           "date": "02 Jan",
//           "systolic": 122,
//           "diastolic": 78
//         },
//         {
//           "date": "03 Jan",
//           "systolic": 118,
//           "diastolic": 82
//         },
        
//           {
//             "date": "04 Jan",
//             "systolic": 125,
//             "diastolic": 79
//           },
//           {
//             "date": "05 Jan",
//             "systolic": 118,
//             "diastolic": 81
//           },
//           {
//             "date": "06 Jan",
//             "systolic": 123,
//             "diastolic": 77
//           },
//           {
//             "date": "07 Jan",
//             "systolic": 130,
//             "diastolic": 84
//           },
//           {
//             "date": "08 Jan",
//             "systolic": 126,
//             "diastolic": 80
//           }
      
//     ]
//   return (
//     <>
//     <ResponsiveContainer width="100%" aspect={2}>
//       <LineChart data={arrayBp} height={400} width={500}>
//       <Legend/>
//         <Tooltip/>
//         <XAxis dataKey="date"/>
//         <YAxis />
//         <Line dataKey="systolic" stroke='red'/>
//         <Line dataKey="diastolic" stroke='green'/>
//       </LineChart>
      
//     </ResponsiveContainer>

//     </>
//   )
// }

// export default Blood

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const BloodPressureChart = () => {
  // Hardcoded data for testing
  const dayData = {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
    datasets: [
      {
        label: 'Systolic BP Per Day',
        data: [120, 122, 121, 123, 125],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Diastolic BP Per Day',
        data: [80, 82, 81, 83, 85],
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
        label: 'Systolic BP Per Week',
        data: [123, 125, 122, 126, 124],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Diastolic BP Per Week',
        data: [83, 85, 82, 86, 84],
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
        label: 'Systolic BP Per Month',
        data: [124, 122, 125, 123],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1
      },
      {
        label: 'Diastolic BP Per Month',
        data: [84, 82, 85, 83],
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

export default BloodPressureChart;
