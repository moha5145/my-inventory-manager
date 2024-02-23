import { createContext, useReducer } from "react";
import { initialState, itemsReducer } from './itemsReducer';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [itemsState, itemsDispatch] = useReducer(itemsReducer, initialState);

    const handleAddItem = (item) => {
        itemsDispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }
    const updateItem = (value, index, name) => {
        const updatedItems = [...itemsState.items];
        updatedItems[index][name] = value;
        itemsDispatch({
            type: 'UPDATE_ITEMS',
            payload: updatedItems
        })
    }

    const deleteItem = (index) => {
        const updatedItems = itemsState.items.filter((_, i) => i !== index)
        itemsDispatch({
            type: 'DELETE_ITEMS',
            payload: updatedItems
        })
    }

    const updateTemporaryNewStock = (id, value) => {
        const updatedItems = itemsState.items.map((item) => 
            id === item.id ? { ...item, newStock: value } : item
        );
        itemsDispatch({
            type: 'UPDATE_TEMPORARY_STOCK',
            payload: updatedItems
        });
    };

    const resetTemporaryNewStock = () => {
        const updatedItems = itemsState.items.map((item) => ({ ...item, newStock: 0 }));
        itemsDispatch({
            type: 'UPDATE_TEMPORARY_STOCK',
            payload: updatedItems
        });
    }

    const confirmTemporaryStock = (stockType) => {
        const updatedItems = itemsState.items.map((item) => {
            const stockValue = stockType === 'in' ? item.newStock : item.newStock * -1
            return  { ...item, stock: item.stock + stockValue, newStock: 0 }
        });

        itemsDispatch({
            type: 'UPDATE_TEMPORARY_STOCK',
            payload: updatedItems
        })
    }

    const value = {
        itemsState,
        itemsDispatch,
        handleAddItem,
        updateItem,
        deleteItem,
        updateTemporaryNewStock,
        resetTemporaryNewStock,
        confirmTemporaryStock
    }

    return (
        <ItemsContext.Provider value={value}>
            {children}
        </ItemsContext.Provider>
    );
}
