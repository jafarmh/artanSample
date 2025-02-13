'use client';

import React from 'react';
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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'گزارشات افزوده شده',
    },
  },
};

const labels = ['1403-11-20','1403-11-21','1403-11-22','1403-11-23','1403-11-24'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'گزارشات افزوده شده',
      data: labels.map(() => (Math.floor(Math.random() * 30))), // random data
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function AreaChart() {
  return <Line options={options} data={data} />;
}
