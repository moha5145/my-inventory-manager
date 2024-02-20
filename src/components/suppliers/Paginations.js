import React from 'react';

const Paginations = ({suppliersState, setCurrentPage, currentPage, suppliersPerPage}) => {

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="mt-4">
            {Array.from({ length: Math.ceil(suppliersState.suppliers.length / suppliersPerPage) }, (_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handleChangePage(index + 1)}
                    className={`px-3 py-1 mx-1 bg-blue-500 text-white rounded-md
                    ${currentPage === index + 1 ? 'bg-blue-600' 
                    : 'hover:bg-blue-600'}`}>{index + 1}
                </button>
            ))}
        </div>
    );
};
export default Paginations;
