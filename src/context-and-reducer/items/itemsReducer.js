export const initialState = {
    items: [],
    item:{
        name: '',
        brand: '',
        category: '',
        model: '',
        stock: 0,
        newStock: 0,
        serialNumber: '',
        editing: false, 
    },
    isLoading: false,
    error: null, 
    showModal: false
}

export const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
               ...state,
                isLoading:  action.payload
            }
        case 'GET_ITEMS':
            console.log('action.payload', action.payload)
            return {
               ...state,
                items:  action.payload
            }
        case 'ADD_ITEM':
            return {
               ...state,
                items:  [action.payload, ...state.items]
            }
        case 'CLEAR_ITEM':
            return {
               ...state,
                item: {
                    name: '',
                    brand: '',
                    category: '',
                    model: '',
                    stock: 0,
                    newStock: 0,
                    serialNumber: '',
                    editing: false, 
                },
            }
        case 'UPDATE_ITEM':
            return {
               ...state,
                item: action.payload
            }
        case 'UPDATE_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'DELETE_ITEMS':
            return {
                ...state,
                items: action.payload
            }
        case 'UPDATE_TEMPORARY_STOCK':
            return {
                ...state,
                items: action.payload
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                showModal: action.payload
            }
        default:
            return state;
    }
}