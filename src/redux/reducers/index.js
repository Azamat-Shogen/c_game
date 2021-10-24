import { combineReducers } from 'redux'
import backgroundsReducer from "./backgroundsReducer";
import cardsReducer from "./cardsReducer";
import instructionReducer from "./instructionsReducer";

export default combineReducers({
    backgrounds: backgroundsReducer,
    cards: cardsReducer,
    instructions: instructionReducer
})