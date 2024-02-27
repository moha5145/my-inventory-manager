import React from 'react';

const OutlineBtn = ({text, onClick, w='full', bgColor='bg-blue-400', textColor='text-white'}) => {
  return (
    <button
        onClick={onClick} className={`${bgColor} ${textColor} border-2 w-${w} py-1 hover:opacity-50 rounded-md`}>
      <p>{text}</p>
    </button>
  );
};
export default OutlineBtn;
