import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import rootReducer from './reducers'
import {connectRouter, routerMiddleware} from 'connected-react-router'

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
export const middlewares = [
    routerMiddleware(history),
    thunk
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middlewares),
    ...enhancers
);

const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composedEnhancers
);

export default store;