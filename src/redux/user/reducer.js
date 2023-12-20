const initialState = {
    currentUser: null,
}

const userReducer = (state = initialState, action) => {
    if (action.type === 'user/login') {
        // action.qualquercoisa
        return { ...state, currentUser: action.payload }
    }

    return state;
}

export default userReducer;
