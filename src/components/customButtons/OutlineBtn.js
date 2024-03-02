import React from 'react';

const OutlineBtn = ({text, onClick, w='full', borderColor='orange-400', textColor='gray-400'}) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-white 
        text-${textColor}
        border-2
        border-${borderColor}
        w-${w}
        py-1
        hover:opacity-50
        rounded-md`
      }
    >
      <p>{text}</p>
    </button>
  );
};
export default OutlineBtn;
