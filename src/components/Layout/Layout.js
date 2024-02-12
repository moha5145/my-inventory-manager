import React from 'react';
import Header from './nav/Header';
import SideBar from './nav/SideBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex min-h-screen w-screen bg-gray-200'>
      <main className='flex w-full'>
        <div className='hidden z-50 lg:block w-64 shadow-xl'>
          <SideBar />
        </div>

        <div className="flex flex-col w-full">
          <div className=' h-48 w-full'>
            <Header />
          </div>
          <div className='px-10 relative w-full '>
            <div className='absolute w-[calc(100%-80px)] -top-20'>
              <div className='h-[calc(100vh-150px)] w-full p-6 bg-white'>
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
