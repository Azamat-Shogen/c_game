import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger'
import thunk from "redux-thunk"
import reducers from "./reducers"

const store = createStore(
    // reducers, composeWithDevTools(applyMiddleware(logger, thunk))
    reducers, composeWithDevTools(applyMiddleware(thunk))
)

export default store