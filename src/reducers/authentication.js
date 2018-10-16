import {LOGIN_ERROR, LOGIN_SUCCESS} from '../containers/Redirect/constants';
import {LOGOUT_SUCCESS} from '../containers/Logout/constants';

const initialState = {};

function tokenReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, ...action.response.data};
        case LOGIN_ERROR:
            return {error: action.message};
        case LOGOUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}

export default tokenReducer;