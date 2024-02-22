import background from "../../components/board/card-images/blue_back.png";
import { REVEAL_CARD, RESET_BACKGROUND } from "./actionTypes";
import { Background } from "../utils";


const initialState = {
    cards: new Background(background).backgrounds
}

const backgroundReducer = (state = initialState, action) => {
    switch (action.type){
        case REVEAL_CARD:
            return {...state, cards: action.payload}
        case RESET_BACKGROUND:

            return {...state, cards: new Background(background).backgrounds}
        default:
            return state
    }
}

export default backgroundReducer