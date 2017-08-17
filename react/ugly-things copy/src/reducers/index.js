let defaultState = {
    posts: []
};

const mainReducer = (state = defaultState, action, index) => {
    if(action.type === "MAKE_UGLY") {
        return {
            ...state,
            posts: [...state.posts, {
                title: action.ugly.title,
                info: action.ugly.info,
                url: action.ugly.url
                }],   
            } 
        } else if(action.type === "GEN_DELETE"){
            let oldOutput = [...state.posts];
            oldOutput.splice(action.index, 1);
            return {
                ...state,
                posts: oldOutput
            }
        } else if(action.type === "GEN_UPDATE"){
            let copy = [...state.posts];
            copy[action.index] = action.post;
            return {
                ...state,
                posts: copy
            }
        } else {
        return {
            ...state
        };
    };
};

export default mainReducer;

//let newTitle = prompt("please update Title");
            // let newInfo = prompt("Please update description")
            // let oldTitle = [...state.posts.title];
            // let oldInfo = [...state.posts.info];
            // oldTitle.splice(action.index, 1, newTitle);
            // oldInfo.splice(action.index, 1, newInfo);
            // return {
            //     ...state,
            //     posts: [...state.posts, {
            //         title: oldTitle,
            //         info: oldInfo
            //     }]
            // }