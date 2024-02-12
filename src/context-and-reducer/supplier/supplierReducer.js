export const initialState = {
    suppliers: [
        {name: 'chala'},
        {name: 'kebede'}
    ]
}

export const suppliersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SUPPLIER':
            return {
               ...state,
                suppliers:  [...state.suppliers, action.payload]
            }
        default:
            return state;
    }
}