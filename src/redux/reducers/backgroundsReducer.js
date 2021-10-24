import background from "../../components/board/cards2/blue_back.png";
import { v4 as uuidv4 } from 'uuid';
import { REVEAL_CARD, RESET_BACKGROUND } from "./actionTypes";

class Card{
    constructor(source) {
        this.source = source
        this.selected = false
        this.id = uuidv4()
    }
}


const initDeck = () => {
    const deckArr = []
    for(let i = 1; i <= 36; i++){
        const card = new Card(background)
        deckArr.push(card)
    }
    return deckArr
}

const initialState = {
    cards: initDeck()
}


const backgroundReducer = (state = initialState, action) => {
    switch (action.type){
        case REVEAL_CARD:
            return {...state, cards: action.payload}
        case RESET_BACKGROUND:

            return {...state, cards: initDeck()}
        default:
            return state
    }
}

export default backgroundReducer