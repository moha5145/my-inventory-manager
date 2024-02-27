import React from 'react';

const ColoredBtn = ({ text, onClick, w = 'full', bgColor = 'bg-blue-400', textColor = 'text-white', px = 'px-2' }) => {
    return (
        <button
            onClick={onClick} className={`${bgColor} ${textColor} ${px} py-1 border-2 w-${w} hover:opacity-70 rounded-md`}>
            <p>{text}</p>
        </button>
    );
};

export default ColoredBtn;
