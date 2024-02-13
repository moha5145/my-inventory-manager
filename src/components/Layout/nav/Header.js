import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-blue-500 flex-1 px-5 h-52 py-10 text-white">
      <Link to="/">Header</Link>   
    </div>
  );
};
export default Header;
