import {SET_TEXT} from "./actionTypes";

const initialState = {
    text: "...♥...♦...♣...♠..."
}

const instructionReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TEXT:
            return {...state, text: action.payload}
        default:
            return state
    }
}

export default instructionReducer