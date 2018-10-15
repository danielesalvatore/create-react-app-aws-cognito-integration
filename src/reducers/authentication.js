import {LOGIN_ERROR, LOGIN_SUCCESS} from '../containers/Login/constants';
import {LOGOUT_SUCCESS} from '../containers/Logout/constants';
//import {FETCH_AUTH_USER_ERROR, FETCH_AUTH_USER_REQUEST, FETCH_AUTH_USER_SUCCESS} from '../containers/App/constants';

const initialState = {};

function tokenReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.response.data, loading: false};
        case LOGIN_ERROR:
            return {error: action.message, loading: false};
        case LOGOUT_SUCCESS:
            return initialState;
        // case FETCH_AUTH_USER_SUCCESS:
        //     const entities = action.response.entities;
        //     const id = action.response.result;
        //     return {...entities.users[id], loading: false};
        // case FETCH_AUTH_USER_ERROR:
        //     return {error: action.message, loading: false};
        // case FETCH_AUTH_USER_REQUEST:
        //     return {loading: true};
        default:
            return state;
    }
}

export default tokenReducer;