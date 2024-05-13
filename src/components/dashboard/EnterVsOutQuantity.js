import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import FilterButton from './FilterButton';

const EnterVsOutQuantity = () => {
  const [period, setPeriod] = useState('day');

  const data = {
    day: {
      labels: [...Array(8)].map((_, i) => `${i * 3}:00`),
      enter: [...Array(8)].map(() => Math.floor(Math.random() * 100)),
      out: [...Array(8)].map(() => Math.floor(Math.random() * 100)),
    },
    week: {
      labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
      enter: [...Array(7)].map(() => Math.floor(Math.random() * 1000)),
      out: [...Array(7)].map(() => Math.floor(Math.random() * 1000)),
    },
    month: {
      labels: [...Array(31)].map((_, i) => `${i + 1}`),
      enter: [...Array(31)].map(() => Math.floor(Math.random() * 1000)),
      out: [...Array(31)].map(() => Math.floor(Math.random() * 1000)),
    },
    year: {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      enter: [...Array(12)].map(() => Math.floor(Math.random() * 10000)),
      out: [...Array(12)].map(() => Math.floor(Math.random() * 10000)),
    },
  };

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  const { labels, enter, out } = data[period];

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Entrée',
        data: enter,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Sortie',
        data: out,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="h-96 w-full md:w-1/2 xl:w-1/2 p-4">
      <div className="bg-white shadow-md p-4">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold mb-2">Quantité Sortie vs Entrée</h2>
          <FilterButton onPeriodChange={handlePeriodChange} />
        </div>
        <div className="h-72">
          {period === 'day' || period === 'week' ? (
            <Bar data={chartData} options={chartOptions} />
          ) : (
            <Line data={chartData} options={chartOptions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default EnterVsOutQuantity;