export const initialState = {
    users: [
        { id: 1, username: 'admin', firstName: 'Admin', lastName: 'User', email: 'admin@example.com', role: 'Admin', status: 'Active', editing: false },
        { id: 2, username: 'manager', firstName: 'Manager', lastName: 'User', email: 'manager@example.com', role: 'Manager', status: 'Active', editing: false },
        { id: 3, username: 'salesperson', firstName: 'Sales', lastName: 'Person', email: 'salesperson@example.com', role: 'Salesperson', status: 'Active', editing: false },
    ]
}

export const usersReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USERS':
            return {
               ...state,
                users:  [...state.users, action.payload]
            }
        case 'UPDATE_USERS':
            return {
                ...state,
                users: action.payload
            }
        case 'DELETE_USERS': 
            return {
                ...state,  users: action.payload
            }
        default:
            return state;
    }
}