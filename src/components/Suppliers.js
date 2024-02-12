import React, { useContext } from 'react';
import { SuppliersContext } from '../context-and-reducer/supplier/supplierContext';

const Suppliers = () => {
    const { suppliersState, suppliersDispatch } = useContext(SuppliersContext);
    return (
        <div>
            {suppliersState.suppliers.map((supplier, index) => {
                return (
                    <div key={index}>
                        <h1>{supplier.name}</h1>
                    </div>
                );
            })}
        </div>
    );
};
export default Suppliers;
