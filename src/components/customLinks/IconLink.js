import React from 'react';
import { Link } from 'react-router-dom';

const IconLink = ({to, state={}, Icon, w='full', bgColor='bg-white-400', textColor='text-black', px='px-2'}) => {
  return (
    <Link
        to={to}
        state={state}
        className={`${bgColor} ${textColor} ${px} w-${w} py-2 hover:opacity-60 font-bold  rounded-md`}
    >
        <span className='flex justify-center items-center'>
            <Icon size={25}/>
        </span>
    </Link>
  );
};
export default IconLink;