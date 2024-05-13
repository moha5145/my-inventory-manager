import React from 'react';

const TopCategories = () => {

    const topCategories = [
    { name: 'Category 1', sales: 300 },
    { name: 'Category 2', sales: 250 },
    { name: 'Category 3', sales: 200 },
    { name: 'Category 4', sales: 150 },
    { name: 'Category 5', sales: 100 },
  ];

  return (
    <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <div className="bg-white shadow-md p-4">
            <h2 className="text-lg font-bold mb-2">Top 5 Catégories les plus vendues</h2>
            <ul className="list-inside list-disc">
            {topCategories.map((category) => (
                <li key={category.name}>{category.name} - {category.sales} ventes</li>
            ))}
            </ul>
        </div>
    </div>
  );
};
export default TopCategories;
