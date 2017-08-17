let defaultState = {
    list: []
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        return {
            ...state,
            list: action.data
        }
    } else {
        return{
            ...state
        }
    }
}

export default mainReducer;