import React, { useState } from 'react';
import Header from './nav/Header';
import SideBar from './nav/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [show, setShow] = useState(false);
  
  return (
    <div className='flex min-h-screen w-screen bg-gray-200'>
      <main className='flex w-full'>
        <div className={` z-50 md:block w-16 lg:w-64 shadow-xl ${show ? 'block' : 'hidden'}`}>
          <SideBar />
        </div>

        <div className="flex flex-col w-full">
          <div className=' h-48 w-full'>
            <Header show={show} setShow={setShow}/>
          </div>
          <div className='px-3 md:px-10 relative w-full '>
            <div className='absolute w-[calc(100%-25px)] md:w-[calc(100%-80px)] -top-20'>
              <div className='h-[calc(100vh-150px)] w-full overflow-y-auto p-6 bg-white rounded-md'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Layout;
