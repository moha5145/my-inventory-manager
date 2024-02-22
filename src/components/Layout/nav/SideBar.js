import React from 'react';
import { Link } from 'react-router-dom';

import { data } from '../../../shared/data'
import { MdHome } from 'react-icons/md';

const SideBar = () => {

  return (
    <div className={`bg-white z-10 w-16 lg:w-64  h-screen text-gray `}>
      <div className='width-full h-36 relative'>
        <img
          src='/assets/img/5eeb1f28f9758139435731ea26afadce.jpg'
          className='w-full h-36'
          alt=''
        />
        <div className='flex flex-col justify-center
          items-center absolute top-0 left-0 w-full 
          h-full bg-black bg-opacity-30 text-white font-bold lg:text-xl'
          >
          <p>SideBar</p>
          <p>profile</p>
        </div>
      </div>

      <nav>
        <Link to="/" 
              className="flex justify-start px-3 items-center h-[100%]
                flex-1 hover:opacity-50 cursor-pointer rounded-md shadow-sm py-4"
            >
              <span className='mr-8'> <MdHome size={30}/></span>
              <h2 className=' hidden lg:block text-'>Home</h2>
            </Link>
        {data.map((item) => {
          return (
            <Link to={item.path} key={item.path}
              className="flex justify-start px-3 items-center h-[100%]
                flex-1 hover:opacity-50 cursor-pointer rounded-md shadow-sm py-4"
            >
              <span className='mr-8'> <item.icon size={30}/></span>
              <h2 className={ `hidden lg:block text-`}>{item.name}</h2> 
            </Link>
          )
        })}

      </nav>
    </div>
  );
};
export default SideBar;