import React from 'react';
import { SuppliersProvider } from '../context-and-reducer/supplier/supplierContext';
import Suppliers from '../components/Suppliers';


const SuppliersPage = () => {
  return (
    <div>
        <SuppliersProvider>
            <p>hello world</p>
            <Suppliers />
        </SuppliersProvider>
    </div>
  );
};
export default SuppliersPage;
