import React from 'react';
import { Link } from 'react-router-dom';

const ColoredLink = ({to, state={}, text, bgColor='bg-white-400', textColor='text-black', px='px-2'}) => {
  return (
    <Link
        to={to}
        state={state}
        className={`${bgColor} ${textColor} ${px} hover:opacity-60 font-bold p-3  rounded-md`}
    >
        {text}
    </Link>
  );
};
export default ColoredLink;
