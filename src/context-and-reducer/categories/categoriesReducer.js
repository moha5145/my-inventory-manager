export const initialState = {
    categories: [
        { id: 1, label: 'Smartphones', value: 'Smartphones' },
        { id: 2, label: 'Accessories', value: 'Accessories' },
        { id: 3, label: 'Tablets', value: 'Tablets' },
    ],
    isLoading: false,
    error: null,
    newCategory: {},
    // showModal: false
}

export const categoriesReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
               ...state,
                isLoading:  action.payload
            }
        case 'GET_CATEGORIES':
            console.log('action.payload', action.payload)
            return {
               ...state,
                categories:  action.payload
            }
        case 'ON_CHANGE_CATEGORY':
            return {
               ...state,
                newCategory:  action.payload
            }
        case 'ADD_CATEGORY':
            return {
               ...state,
                categories:  [...state.categories, action.payload],
                newCategory: {}
            }
        case 'UPDATE_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        case 'DELETE_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}