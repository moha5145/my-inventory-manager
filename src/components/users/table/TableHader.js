import React from 'react';

const TableHeader = () => {
  return (
    <tr className="  bg-blue-400 flex flex-col flex-no wrap justify-center sm:table-row rounded-lg sm:rounded-none mb-5 sm:mb-0">
        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            #
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            First Name
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            Last Name
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            User Name
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            Email
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            Role
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            Status
        </th>

        <th className='h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
            Action
        </th>
    </tr>
  );
};
export default TableHeader;
