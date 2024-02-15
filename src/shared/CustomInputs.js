import React from 'react';

export const TextInput = ({placeholder, onChange, value, type}) => {
  return (
    <div className=' min-w-20 h-10'>
      <input
        type={type}
        placeholder={placeholder}
        autoFocus
        className='w-full h-full pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};


export const DateInput = ({placeholder, onChange, value, type}) => {
  return (
    <div className=' min-w-22 h-10'>
      <input
        type={type}
        placeholder={placeholder}
        autoFocus
        className='w-full h-full pl-1 mb-1 md:m-0 border border-gray-400 rounded-lg outline-orange-400'
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
