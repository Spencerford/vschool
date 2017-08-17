let defaultState = {
    items: [],
    totalCost: 0,
    totalItems: 0
}

const mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_DATA"){
        let total = 0;
                
        for(let i = 0; i < action.items.length; i++){
            total += action.items[i].price;
        }
        
        return {
            ...state,
            items: action.items,
            totalCost: total,
            totalItems: action.items.length
            
        }
    }
    return {
        ...state
    }
}

export default mainReducer;