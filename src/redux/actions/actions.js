import {
    GAME_STARTED,
    SELECT_ROW,
    MIX_CARDS,
    HIDDEN,
    SET_ROUND,
    ROW_SELECT,
    STARTED_DISABLED,
    RESET_ROUND, REVEAL_CARD, SET_TEXT, RESET_BACKGROUND, RESET_CARDS
} from "../reducers/actionTypes";
import { mixCardsUtils } from "../utils";


export const startGame = () => {
    return {
        type: GAME_STARTED
    }
}

export const selectRow = (rowNumber) => {
    return{
        type: SELECT_ROW,
        payload: rowNumber
    }
}

export const mixCards = (arr) => {
    const mixed = mixCardsUtils(arr)
    return {
        type: MIX_CARDS,
        payload: mixed
    }
}

export const toggleHidden = () => {
    return {
        type: HIDDEN
    }
}

export const setRound = () => {
    return {
        type: SET_ROUND
    }
}

export const setRowSelected = (value) => {
    return {
        type: ROW_SELECT,
        payload: value
    }
}

export const disableStarted = (value) => {
    return {
        type: STARTED_DISABLED,
        payload: value
    }
}

export const resetRound = () => {
    return {
        type: RESET_ROUND
    }
}

export const revealCard = (newBackground) => {
    return {
        type: REVEAL_CARD,
        payload: newBackground
    }
}

export const setText = (newText) => {
    return {
        type: SET_TEXT,
        payload: newText
    }
}

export const resetBackground = () => {
    return {
        type: RESET_BACKGROUND
    }
}

export const resetCards = () => {
    return {
        type: RESET_CARDS
    }
}











