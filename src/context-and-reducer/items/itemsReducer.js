export const initialState = {
    items: [],
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