import React from 'react';

const ColoredBtn = ({ text, onClick, w='w-72', bgColor = 'bg-blue-400', textColor = 'text-white', px = 'px-2' }) => {
    return (
        <button
            onClick={onClick} className={`${bgColor} ${textColor} ${px} ${w} py-1 border-2  hover:opacity-70 rounded-md`}>
            <p>{text}</p>
        </button>
    );
};

export default ColoredBtn;
