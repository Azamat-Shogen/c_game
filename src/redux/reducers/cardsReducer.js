import CARD_IMAGES from '../../components/board/card-images'
import {GAME_STARTED, SELECT_ROW, MIX_CARDS, HIDDEN, RESET_ROUND,
    SET_ROUND, ROW_SELECT, STARTED_DISABLED, RESET_CARDS
} from "./actionTypes";
import { selectRowUtils } from "../utils";
import {Deck} from "../utils";


const initialState = {
    cards: new Deck(CARD_IMAGES).deck,
    hidden: true,
    rowSelected: false,
    startedDisabled: false,
    round: 0
}


const cardsReducer = (state = initialState, action) => {
    switch (action.type){
        case GAME_STARTED:
            return {...state, hidden: !state.hidden }
        case SELECT_ROW:
            const modCards = selectRowUtils([...state.cards], action.payload)
            return {...state, cards: modCards}
        case MIX_CARDS:
            return {...state, cards: action.payload}
        case HIDDEN:
            return {...state, hidden: !state.hidden}
        case SET_ROUND:
            return {...state, round: state.round += 1}
        case ROW_SELECT:
            return {...state, rowSelected: action.payload}
        case STARTED_DISABLED:
            return {...state, startedDisabled: action.payload}
        case RESET_ROUND:
            return {...state, round: 0}
        case RESET_CARDS:
            const newDeck = new Deck(CARD_IMAGES).deck;
            newDeck.map(el => { return {...el, selected: false}})
            return {...state, cards: newDeck}
        default:
            return state
    }
}

export default cardsReducer