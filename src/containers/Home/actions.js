import {FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from './constants';
import * as api from '../../api'

export const fetchUserInfo = () => (dispatch) => {

    dispatch({
        type: FETCH_USER_REQUEST
    });

    return api.fetchUserInfo()
        .then(response => {
                dispatch({
                    type: FETCH_USER_SUCCESS,
                    response: response
                });
            },
            error => {
                dispatch({
                    type: FETCH_USER_ERROR,
                    message: error.message || 'Something went wrong.',
                });
            });
};