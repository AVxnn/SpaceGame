import {createStore, applyMiddleware, compose} from "redux";



const defaultState = {
    money: 0,
    auth: {},
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_MONEY':
            return {...state, money: state.money += action.payload}
        case 'ADD_AUTH':
            return {...state, auth: state.auth = action.payload}
        default:
            return state
    }
}


export const store = createStore(reducer, composeEnhancers(applyMiddleware()))