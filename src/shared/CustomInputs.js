import React from 'react';

import { MdSearch } from "react-icons/md";

export const TextInput = ({placeholder, onChange, value, type, name=''}) => {
  return (
    <div className=' w-full h-10'>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        autoFocus
        className='w-full h-full pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const NumberInput = ({placeholder, onChange, value, type, name='', min=null}) => {
  return (
    <div className=' min-w-20 h-10'>
      <input
        type={type}
        min={min}
        placeholder={placeholder}
        name={name}
        autoFocus
        className='w-full h-full pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};


export const DateInput = ({placeholder, onChange, value, type, name=''}) => {
  return (
    <div className=' min-w-22 h-10'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoFocus
        className='w-full h-full pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export const SearchInput = ({placeholder, onChange, value, type}) => {
  return (
    <div className='flex items-center min-w-22 h-12 border border-gray-400 rounded-lg '>
      <input
        type={type}
        placeholder={placeholder}
        autoFocus
        className='w-full h-full p-1 my-1 md:m-0  rounded-lg outline-orange-400'
        onChange={onChange}
        value={value}
      />
      <span className='px-2 bg-blue-400 h-full flex items-center justify-center text-white rounded-r-md'> 
        <MdSearch />
      </span>
    </div>
  );
};

export const SelectInput = ({name, onChange, defaultValue, options = []}) => {
  return (
    <div className=' min-w-22 h-10'>
      <select
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full border outline-orange-400 rounded-md p-2"
      > 
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
