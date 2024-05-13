import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';

const IncomeExpensesChart = () => {
  const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Income',
        data: [120, 190, 300, 500, 200, 100, 150, 250, 350, 400, 300, 200],
        backgroundColor: '#4caf50',
        borderColor: '#4caf50',
      },
    ],
  };

  const expensesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Expenses',
        data: [50, 100, 150, 200, 100, 50, 100, 150, 200, 150, 100, 50],
        backgroundColor: '#f44336',
        borderColor: '#f44336',
      },
    ],
  };

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
      <div className="bg-white shadow-md p-4">
        <h2 className="text-lg font-bold mb-2">Income vs Expenses</h2>
        <div className="flex">
          <div className="w-1/2">
            <Bar data={incomeData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="w-1/2">
            <Line data={expensesData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpensesChart;
