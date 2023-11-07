'use client'
// LineChart.tsx
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export interface LineChartProps {
    labels: string[];
    dataset: number[];
  }
  
  const LineChartComponent: React.FC<LineChartProps> = ({ labels, dataset }) => {
    const data = {
      labels,
      datasets: [
        {
          label: 'Dataset',
          data: dataset,
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };
  
    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    };
  
    return (
        <>
        <div style={{ width: '800px', height: '420px' }} className='bg-white drop-shadow-md px-10'>
            <h1>Hello World</h1> 
            <Line  data={data} options={options} />
        </div>
        </>
    );
  };
  
  export default LineChartComponent;
