export const initialState = {
    users: [
        {name: 'chala'},
        {name: 'kebede'}
    ]
}

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {
               ...state,
                users:  [...state.users, action.payload]
            }
        default:
            return state;
    }
}