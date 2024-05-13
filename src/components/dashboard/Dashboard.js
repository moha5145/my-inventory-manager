import React, { useState } from 'react';

import FilterButton from './FilterButton';
import GraphBlock from './GraphBloc';
import TopProducts from './TopProducts';
import IncomeExpensesChart from './IncomeExpensesChart';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [data, setData] = useState([
    { title: 'Stock Levels', value: 100, blockStyle: 'bg-blue-500 hover:bg-blue-700 text-white' },
    { title: 'Low Stock', value: 5, blockStyle: 'bg-orange-500 hover:bg-orange-700 text-white' },
    { title: 'Total Entrées', value: 500, blockStyle: 'bg-green-500 hover:bg-green-700 text-white' },
    { title: 'Total Sorties', value: 200, blockStyle: 'bg-red-500 hover:bg-red-700 text-white' },
  ]);

  const handleFilter = (period) => {
    setSelectedPeriod(period);
    const filteredData = data.filter((item) => {
      const threshold = {
        day: 10,
        week: 50,
        month: 100,
        year: 500,
      }[period] || 0;
      return item.value > threshold;
    });
    setData(filteredData);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-4">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <FilterButton onPeriodChange={handleFilter} />
        </div>
        <div className="flex flex-wrap -mx-4">
          {data.map((item) => (
            <div className="w-full md:w-1/2 xl:w-1/4 p-4">
              <div className={`${item.blockStyle} shadow-md p-4`}>
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p>{item.value} items</p>
                {item.title === 'Total Sorties' && (
                  <div className="flex justify-center">
                    {/* <svg width="100" height="100"> */}
                      {/* <rect x="10" y="10" width="80" height="80" fill={item.blockStyle} rx="10" /> */}
                    {/* </svg> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <GraphBlock />

        <div className="flex flex-wrap -mx-4 mt-8">
          <TopProducts />
          <IncomeExpensesChart />
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;