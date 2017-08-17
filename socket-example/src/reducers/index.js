let defaultState = {
    chats: []
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            chats: action.data
        }
    } else if(action.type === "RECEIVE_CHAT"){
        return {
            ...state,
            chats: [...state.chats, action.data]
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;