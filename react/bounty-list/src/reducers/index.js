let defaultState = {
    hits: []
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            hits: action.data
        }
    } else {
        return{
            ...state
        }
    }
}

export default mainReducer;