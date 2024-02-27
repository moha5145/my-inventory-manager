import React from 'react';
import { Link } from 'react-router-dom';

const OutlineLink = ({to, state={}, text, bgColor='bg-white-400', textColor='text-black', px='px-2'}) => {
  return (
    <Link
        to={to}
        state={state}
        className={`
          ${bgColor}
          ${textColor}
          ${px} 
          hover:opacity-60 font-bold p-3 rounded-md border-2 border-gray-400
        `}
    >
        {text}
    </Link>
  );
};
export default OutlineLink;
