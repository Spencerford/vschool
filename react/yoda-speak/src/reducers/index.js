let defaultState = {
    text: ""
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_TEXT"){
        return {text: action.text}
    } else {
        return state;
    }
}

export default mainReducer;