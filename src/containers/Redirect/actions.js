import {LOGIN_ERROR, LOGIN_SUCCESS} from './constants';
import LocalStorage from 'localStorage'

export const onLoginSuccess = ({idToken, accessToken}) => (dispatch) => {

    // Save token and user id to local storage
    try {
        LocalStorage.setItem("idToken", idToken);
        LocalStorage.setItem("accessToken", accessToken);
    } catch (e) {
        dispatch({
            type: LOGIN_ERROR,
            message: 'Impossible to store user credentials. Please contact support for further information.',
        });
    }

    dispatch({
        type: LOGIN_SUCCESS,
        response: {
            idToken,
            accessToken
        },
    });


};

export const onLoginError = ({error}) => (dispatch) => {
    dispatch({
        type: LOGIN_ERROR,
        message: error || 'Ops... something went wrong',
    });
};
