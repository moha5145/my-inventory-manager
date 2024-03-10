import React from 'react';

const IconBtn = ({ Icon,  onClick, w = 'full', bgColor = 'bg-blue-400', textColor = 'text-white', px = 'px-2' }) => {
    return (
        <button
            onClick={onClick} className={`${bgColor} ${textColor} ${px} py-1 border-2 w-${w} hover:opacity-70 rounded-md`}>
            <span className='flex justify-center items-center'>
                <Icon size={25}/>
            </span>
        </button>
    );
};

export default IconBtn;