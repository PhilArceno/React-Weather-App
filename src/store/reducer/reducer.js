const initialState = {
    position: undefined
}

function reducer(state = initialState, action) {
    switch(action.type){
        case "SET-POSITION":
            console.log(action.content)
            return {
                ...state, 
                position: action.content
            }
        default:
        return state
    }
}

export { reducer }