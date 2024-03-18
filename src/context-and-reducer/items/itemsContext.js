import { createContext, useReducer } from "react";
import { initialState, itemsReducer } from './itemsReducer';
import axios from "axios";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [itemsState, itemsDispatch] = useReducer(itemsReducer, initialState);

    const onChangeItem = (name, value) => {
        const updatedItem = {...itemsState.item};
        updatedItem[name] = value
        itemsDispatch({ type: 'UPDATE_ITEM', payload: updatedItem })
    }
        
    const handleAddItem = async (item) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/items/create`, item);
            itemsDispatch({ type: 'ADD_ITEM', payload: response.data })
            itemsDispatch({ type: 'CLEAR_ITEM'})
        } catch (error) {
            console.log('error', error)
        }
    }

    const getItems = async () => {
        try {
            itemsDispatch({ type: 'LOADING', payload: true });
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/items`);
            itemsDispatch({ type: 'GET_ITEMS', payload: response.data });
        } catch (error) {
            console.log('error', error)
        } finally {
            itemsDispatch({ type: 'LOADING', payload: false });
        }
    }
    
    const updateItem = (value, index, name) => {
        const updatedItems = [...itemsState.items];
        updatedItems[index][name] = value;
        itemsDispatch({
            type: 'UPDATE_ITEMS',
            payload: updatedItems
        })
    }

    const saveUpdate = async (item) => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_API_URL}/item/update/${item._id}`, item);
            const updatedItems = itemsState.items.map((i) => i._id === item._id ? response.data : i)
            itemsDispatch({ type: 'UPDATE_ITEMS', payload: updatedItems})
        } catch (error) {
            console.log('error', error)
        }
    }

    const deleteItem = async (element) => {
        try {
            const response = await axios.delete(`${process.env.REACT_APP_API_URL}/item/delete/${element._id}`);
            console.log('response.data', response.data)
            const updatedItems = itemsState.items.filter((item, i) => item._id !== element._id)
            itemsDispatch({ type: 'DELETE_ITEMS', payload: updatedItems })
        } catch (error) {
            console.log('error', error)
        }
    }

    const updateTemporaryNewStock = (id, value) => {
        const updatedItems = itemsState.items.map((item) => 
            id === item._id ? { ...item, newStock: value } : item
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

    const toggleModal = (value) => {
        itemsDispatch({
            type: 'TOGGLE_MODAL',
            payload: value
        })
    }

    const value = {
        itemsState,
        itemsDispatch,
        onChangeItem,
        handleAddItem,
        getItems,
        updateItem,
        saveUpdate,
        deleteItem,
        updateTemporaryNewStock,
        resetTemporaryNewStock,
        confirmTemporaryStock,
        toggleModal
    }

    return (
        <ItemsContext.Provider value={value}>
            {children}
        </ItemsContext.Provider>
    );
}
