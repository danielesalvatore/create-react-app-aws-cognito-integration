import {LOGOUT_REQUEST, LOGOUT_SUCCESS} from './constants';
import LocalStorage from 'localStorage'
import {getToken} from '../../utils/authentication'
import * as ROUTES from '../../config/routes'
import * as api from '../../api'

export const logout = ({history}) => (dispatch) => {

    const onLogoutSuccess = () => {

        LocalStorage.clear();

        dispatch({
            type: LOGOUT_SUCCESS,
        });

        history.push(ROUTES.LOGIN);

    };

    dispatch({
        type: LOGOUT_REQUEST,
    });

    if (!getToken()) {
        return new Promise(onLogoutSuccess)
    }

    return api.logout()
        .then(onLogoutSuccess)
        .catch(onLogoutSuccess)
};