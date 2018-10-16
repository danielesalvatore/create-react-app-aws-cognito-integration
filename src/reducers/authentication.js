import {LOGIN_ERROR, LOGIN_SUCCESS} from '../containers/Redirect/constants';
import {LOGOUT_SUCCESS} from '../containers/Logout/constants';
import {FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "../containers/Home/constants";

const initialState = {};

function authentication(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.response};
        case LOGIN_ERROR:
            return {error: action.message};
        case LOGOUT_SUCCESS:
            return initialState;
        case FETCH_USER_SUCCESS:
            return {...action.response.data, loading: false};
        case FETCH_USER_ERROR:
            return {error: action.message, loading: false};
        case FETCH_USER_REQUEST:
            return {loading: true};
        default:
            return state;
    }
}

export default authentication;