import React, { useContext, useState } from 'react';

import { SuppliersContext } from '../../context-and-reducer/supplier/supplierContext';

import Pagination from './Pagination';
import AddSupplier from './AddSuppliers';
import SuppliersList from './SuppliersList';

const Suppliers = () => {
  const { suppliersState, addSupplier, updateSupplier, deleteSupplier } = useContext(SuppliersContext);
    
  const [currentPage, setCurrentPage] = useState(1);    
  const suppliersPerPage = 10;
  const indexOfLastSupplier = currentPage * suppliersPerPage;
  const indexOfFirstSupplier = indexOfLastSupplier - suppliersPerPage;
  const currentSuppliers = suppliersState.suppliers.slice(indexOfFirstSupplier, indexOfLastSupplier);

  const handleChangePage = (page) => {
      setCurrentPage(page);
  };

  return (
    <div className="max-w-7xl mx-auto mt-8  rounded-md ">
      <h2 className="text-xl font-semibold mb-4">Supplier Management</h2>
      
      <AddSupplier addSupplier={addSupplier} />
    
      <h3 className="text-lg font-semibold pt-4">Supplier List</h3>
      <div className="max-w-7xl mx-auto mt-8 p-4 bg-gray-100 rounded-md">
        <div>
          
          <SuppliersList
            suppliersState={suppliersState}
            currentSuppliers={currentSuppliers}
            deleteSupplier={deleteSupplier}
            updateSupplier={updateSupplier}
          />

          <Pagination
            suppliersState={suppliersState}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />

          <div className="mt-4">
              {Array.from({ length: Math.ceil(suppliersState.suppliers.length / suppliersPerPage) }, (_, index) => (
                  <button key={index + 1} onClick={() => handleChangePage(index + 1)} className={`px-3 py-1 mx-1 bg-blue-500 text-white rounded-md ${currentPage === index + 1 ? 'bg-blue-600' : 'hover:bg-blue-600'}`}>{index + 1}</button>
              ))}
          </div>
      </div>
    </div>
    </div>
  );
};
export default Suppliers;
