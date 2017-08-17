let defaultState = {
    color: "blue",
    name: "blue"
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "CHANGE_COLOR") {
        if(action.color === "#"){
            return {
                ...state,
                color: "red"
            }
        }
        return {
            ...state,
            color: action.color
            } 
        } else if (action.type === "COLOR_NAME"){
            if(action.name === undefined){
                return {
                    ...state,
                    name: "red"
                }
            }
            return {
                ...state,
                name: action.name.name
            }
        } else {
            return {
                ...state
            }
        }
}

export default mainReducer;