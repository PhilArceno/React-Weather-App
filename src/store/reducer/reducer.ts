interface globalState {
    position: object
}

interface Action {
    type: string,
    content: object | number
}
const initialState = {
    position: {}
}



function reducer(state = initialState, action: Action) {
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