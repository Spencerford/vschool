let defaultState = {
    top: "",
    url: "",
    bottom: ""
};

const mainReducer = (state = defaultState, action) => {
    if(action.type === "MAKE_MEME") {
        return {
            ...state,
            top: action.meme.top,
            url: action.meme.url,
            bottom: action.meme.bottom
        }
    } else {
        return {
            ...state
        }
    }
}

export default mainReducer;