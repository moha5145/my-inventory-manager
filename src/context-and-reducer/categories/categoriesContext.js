import { createContext, useReducer } from "react";
import axios from "axios";

import { initialState, categoriesReducer } from './categoriesReducer';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categoriesState, categoriesDispatch] = useReducer(categoriesReducer, initialState);

    const onChangeCategory = (value) => {
        categoriesDispatch({ type: 'ON_CHANGE_CATEGORY', payload: value })
    }
    const addCategory = (value) => {
        categoriesDispatch({ type: 'ADD_CATEGORY', payload: value })
    }

    const handleAddItem = async (item) => {
        console.log('item from handleAddItem', item)
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/items/create`, item);
            categoriesDispatch({ type: 'ADD_ITEM', payload: response.data })
        } catch (error) {
            console.log('error', error)
        }
    }

    const getItems = async () => {
        try {
            categoriesDispatch({ type: 'LOADING', payload: true });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
            categoriesDispatch({ type: 'GET_ITEMS', payload: response.data });
        } catch (error) {
            console.log('error', error)
        } finally {
            categoriesDispatch({ type: 'LOADING', payload: false });
        }
    }
    
    const updateItem = (value, index, name) => {
        const updatedItems = [...categoriesState.items];
        updatedItems[index][name] = value;
        categoriesDispatch({
            type: 'UPDATE_ITEMS',
            payload: updatedItems
        })
    }

    const saveUpdate = async (item) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/item/update/${item._id}`, item);
            const updatedItems = categoriesState.items.map((i) => i._id === item._id ? response.data : i)
            // categoriesDispatch({ type: 'UPDATE_ITEMS', payload: updatedItems })
            categoriesDispatch({ type: 'UPDATE_ITEMS', payload: updatedItems})
        } catch (error) {
            console.log('error', error)
        }
    }

    const deleteItem = async (element) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/item/delete/${element._id}`);
            console.log('response.data', response.data)
            const updatedItems = categoriesState.items.filter((item, i) => item._id !== element._id)
            categoriesDispatch({ type: 'DELETE_ITEMS', payload: updatedItems })
        } catch (error) {
            console.log('error', error)
        }
    }

    const updateTemporaryNewStock = (id, value) => {
        console.log('value', value)
        const updatedItems = categoriesState.items.map((item) => 
            id === item._id ? { ...item, newStock: value } : item
        );
        categoriesDispatch({
            type: 'UPDATE_TEMPORARY_STOCK',
            payload: updatedItems
        });
    };

    const resetTemporaryNewStock = () => {
        const updatedItems = categoriesState.items.map((item) => ({ ...item, newStock: 0 }));
        categoriesDispatch({
            type: 'UPDATE_TEMPORARY_STOCK',
            payload: updatedItems
        });
    }

    const confirmTemporaryStock = (stockType) => {
        const updatedItems = categoriesState.items.map((item) => {
            const stockValue = stockType === 'in' ? item.newStock : item.newStock * -1
            return  { ...item, stock: item.stock + stockValue, newStock: 0 }
        });

        categoriesDispatch({
            type: 'UPDATE_TEMPORARY_STOCK',
            payload: updatedItems
        })
    }

    const value = {
        categoriesState,
        categoriesDispatch,
        handleAddItem,
        getItems,
        updateItem,
        saveUpdate,
        deleteItem,
        updateTemporaryNewStock,
        resetTemporaryNewStock,
        confirmTemporaryStock,
        addCategory,
        onChangeCategory
    }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}
