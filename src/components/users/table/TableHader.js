import React from 'react';

const texts = ["#", "First Name", "Last Name", "User Name", "Email", "Role", "Status", "Action"]

const HeaderCell = ({text}) => {
    return <th className='min-w-[9rem] h-12 p-2 text-left text-xs sm:text-md mb-[0.017rem]'>
        {text}
    </th>
}

const TableHeader = () => {
  return (
    <tr className="min-w-full  bg-blue-400 flex flex-col flex-no wrap justify-center sm:table-row rounded-lg sm:rounded-none mb-5 sm:mb-0">
        {texts.map((text, index) => {
          return <HeaderCell key={index} text={text} />
        })}
    </tr>
  );
};
export default TableHeader;
