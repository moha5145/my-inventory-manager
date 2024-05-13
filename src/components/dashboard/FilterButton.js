import React, { useState } from 'react';

const FilterButton = ({onPeriodChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter by Date
      </button>
      {isOpen && (
        <div className="absolute bg-white shadow-md py-2">
          <ul>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => onPeriodChange('day')}
              >
                Today
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => onPeriodChange('week')}
              >
                This Week
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => onPeriodChange('month')}
              >
                This Month
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => onPeriodChange('year')}
              >
                This Year
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterButton;