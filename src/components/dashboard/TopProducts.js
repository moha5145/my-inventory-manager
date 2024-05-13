import React from 'react';

import FilterButton from './FilterButton';

const topFiveProducts = [
  { name: 'P 1', category: "phone", date: "01/05/2024", selPrice: 100, quantity: 100 },
  { name: 'P 2', category: "phone", date: "01/05/2024", selPrice: 100, quantity: 80 },
  { name: 'P 3', category: "phone", date: "01/05/2024", selPrice: 100, quantity: 60 },
  { name: 'P 4', category: "phone", date: "01/05/2024", selPrice: 100, quantity: 50 },
  { name: 'P 5', category: "phone", date: "01/05/2024", selPrice: 100, quantity: 40 },
];

const TopProducts = () => {
  return (
    <div className="w-full md:w-1/2  p-4">
      {topFiveProducts?.length > 0 ? (
        <div className="bg-white shadow-md p-4">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold mb-2">Top 5 Produits les plus vendus</h2>
            <FilterButton />
          </div>
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Catégorie</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Prix de vente u</th>
                <th className="px-4 py-2">Quantité</th>
              </tr>
            </thead>
            <tbody>
              {topFiveProducts.map((product) => (
                <tr key={product.name}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2">{product.date}</td>
                  <td className="border px-4 py-2">{product.selPrice}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-4">
          <p>No sales data available</p>
        </div>
      )}
    </div>
  );
};

export default TopProducts;
