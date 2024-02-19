import React from 'react';
import { MdSearch } from "react-icons/md";

import { SearchInput } from '../../shared/CustomInputs';

const SearchBlock = () => {
  return (
    <tr>
        <td className=' m-auto border-grey-light border '>
            <MdSearch />
        </td>
        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>
        
        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>

        <td>
            <SearchInput
                type="text"
                placeholder="test"
                onChange={(e) => e.target.value}
                value=''
            />
        </td>
        <td className='bg-gray-200 rounded-md'>
        </td>
    </tr>
  );
};
export default SearchBlock;
