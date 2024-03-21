import React from 'react';

const IconBtn = ({ Icon,  onClick, w = 'full', bgColor = 'bg-blue-400', textColor ='text-white', borderColor = 'border-blue-400', px = 'px-2' }) => {
    return (
        <button
            onClick={onClick}
            className={`
                ${bgColor}
                ${textColor}
                ${px}
                py-1
                w-${w}
                hover:border
                hover:bg-gray-100
                ${borderColor}
                rounded-md
            `}
        >
            <span className='flex justify-center items-center'>
                <Icon size={25}/>
            </span>
        </button>
    );
};

export default IconBtn;