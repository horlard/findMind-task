

export default (state=[],action) => {
    switch(action.type) {
        case 'NEW_LIST' : 
            return [...state,action.payload]
        default: 
            return state;
    }
}