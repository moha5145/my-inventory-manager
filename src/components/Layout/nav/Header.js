import React from 'react';
import { Link } from 'react-router-dom';

import { MdMenu } from "react-icons/md";

const Header = ({show, setShow}) => {
  return (
    <div className="bg-blue-500 flex-1 px-5 h-52 py-10 text-white">
      <Link to="/">My Inventory Manager</Link>  
      <div className='md:hidden cursor-pointer' onClick={() => setShow(!show)}>
        <MdMenu />
      </div> 
    </div>
  );
};
export default Header;
