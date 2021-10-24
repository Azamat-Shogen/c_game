import CARD_IMAGES from '../../components/board/cards2'
import { v4 as uuidv4 } from 'uuid';
import {
    GAME_STARTED, SELECT_ROW, MIX_CARDS, HIDDEN, RESET_ROUND,
    SET_ROUND, ROW_SELECT, STARTED_DISABLED, RESET_CARDS
} from "./actionTypes";
import { selectRowUtils } from "../utils";


class Card{
    constructor(source) {
        this.source = source
        this.selected = false
        this.id = uuidv4()
    }
}



const initDeck = () => {
    const deckArr = [];

    for(let i = 1; i <= 36; i++){
        const card = new Card(CARD_IMAGES[`card${i}`])
        deckArr.push(card)
    }

    for(let i = deckArr.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [deckArr[i], deckArr[j]] = [deckArr[j], deckArr[i]]
    }
    return deckArr
}



const initialState = {
    cards: initDeck(),
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
            const newCard = initDeck();
            newCard.map(el => { return {...el, selected: false}})
            return {...state, cards: newCard}
        default:
            return state

    }
}

export default cardsReducer