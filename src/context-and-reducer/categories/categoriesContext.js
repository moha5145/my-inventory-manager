import { createContext, useReducer } from "react";
import axios from "axios";

import { initialState, categoriesReducer } from './categoriesReducer';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categoriesState, categoriesDispatch] = useReducer(categoriesReducer, initialState);

    const onChangeCategory = (value) => {
        categoriesDispatch({ type: 'ON_CHANGE_CATEGORY', payload: value })
    }

    const onChangeCategoryUpdate = (index, name, value) => {
        const updatedCategories = [...categoriesState.categories];
        updatedCategories[index][name] = value
        categoriesDispatch({ type: 'UPDATE_CATEGORIES', payload: updatedCategories })
    }

    const addCategory = async (value) => {
        if (!value ) return;

        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/category/create`, {
                value,
                newCategory: '',
                editing: false
            });
            categoriesDispatch({ type: 'ADD_CATEGORY', payload: data });
        } catch (error) {
            console.error(error);
        }
    };


    const getCategories = async () => {
        try {
            categoriesDispatch({ type: 'LOADING', payload: true });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
            categoriesDispatch({ type: 'GET_CATEGORIES', payload: response.data });
        } catch (error) {
            console.log('error', error)
        } finally {
            categoriesDispatch({ type: 'LOADING', payload: false });
        }
    }

    const updateCategory = (index, name, value, _id = null) => {
        const updatedCategories = [...categoriesState.categories];
        updatedCategories[index][name] = value;
        categoriesDispatch({type: 'UPDATE_CATEGORIES', payload: updatedCategories })
    }

    const saveUpdate = async (_id, value) => {
        if (!value ) return;
        const { data } = await axios.put(`${process.env.REACT_APP_API_URL}/category/update/${_id}`, {newValue: value});
        const updatedCategories = categoriesState.categories.map((category, i) => category._id === _id ? data : category)
        categoriesDispatch({type: 'UPDATE_CATEGORIES', payload: updatedCategories })
    }

    const deleteCategory = async (payload) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/category/delete/${payload._id}`);
            console.log('response.data', response.data)
            const updatedCategories = categoriesState.categories.filter((category, i) => category._id !== payload._id)
            categoriesDispatch({ type: 'DELETE_CATEGORIES', payload: updatedCategories })
        } catch (error) {
            console.log('error', error)
        }
    }

    // const clearNewCategory = () => {
    //     categoriesDispatch({ type: 'CLEAR_NEW_CATEGORY', payload: {label: '', value: ''} })
    // }

    // const handleAddItem = async (item) => {
    //     console.log('item from handleAddItem', item)
    //     try {
    //         const response = await axios.post(`${process.env.REACT_APP_API_URL}/items/create`, item);
    //         categoriesDispatch({ type: 'ADD_ITEM', payload: response.data })
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }

    

    // const saveUpdate = async (item) => {
    //     try {
    //         const response = await axios.put(`${process.env.REACT_APP_API_URL}/item/update/${item._id}`, item);
    //         const updatedItems = categoriesState.items.map((i) => i._id === item._id ? response.data : i)
    //         // categoriesDispatch({ type: 'UPDATE_ITEMS', payload: updatedItems })
    //         categoriesDispatch({ type: 'UPDATE_ITEMS', payload: updatedItems})
    //     } catch (error) {
    //         console.log('error', error)
    //     }
    // }


    // const updateTemporaryNewStock = (id, value) => {
    //     console.log('value', value)
    //     const updatedItems = categoriesState.items.map((item) => 
    //         id === item._id ? { ...item, newStock: value } : item
    //     );
    //     categoriesDispatch({
    //         type: 'UPDATE_TEMPORARY_STOCK',
    //         payload: updatedItems
    //     });
    // };

    // const resetTemporaryNewStock = () => {
    //     const updatedItems = categoriesState.items.map((item) => ({ ...item, newStock: 0 }));
    //     categoriesDispatch({
    //         type: 'UPDATE_TEMPORARY_STOCK',
    //         payload: updatedItems
    //     });
    // }

    // const confirmTemporaryStock = (stockType) => {
    //     const updatedItems = categoriesState.items.map((item) => {
    //         const stockValue = stockType === 'in' ? item.newStock : item.newStock * -1
    //         return  { ...item, stock: item.stock + stockValue, newStock: 0 }
    //     });

    //     categoriesDispatch({
    //         type: 'UPDATE_TEMPORARY_STOCK',
    //         payload: updatedItems
    //     })
    // }

    const value = {
        categoriesState,
        categoriesDispatch,
        // handleAddItem,
        getCategories,
        updateCategory,
        saveUpdate,
        // saveUpdate,
        deleteCategory,
        // clearNewCategory,
        // updateTemporaryNewStock,
        // resetTemporaryNewStock,
        // confirmTemporaryStock,
        addCategory,
        onChangeCategory,
        onChangeCategoryUpdate
    }

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}
