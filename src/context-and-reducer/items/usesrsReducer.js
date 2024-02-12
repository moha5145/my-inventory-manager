export const initialState = {
    items: [
        {name: 'chala'},
        {name: 'kebede'}
    ]
}

export const itemsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return {
               ...state,
                items:  [...state.items, action.payload]
            }
        default:
            return state;
    }
}