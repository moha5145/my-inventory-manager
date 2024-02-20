import React from 'react';
import { SuppliersProvider } from '../context-and-reducer/supplier/supplierContext';
import Suppliers from '../components/suppliers/Suppliers';


const SuppliersPage = () => {
  return (
    <div>
        <SuppliersProvider>
            <Suppliers />
        </SuppliersProvider>
    </div>
  );
};
export default SuppliersPage;
