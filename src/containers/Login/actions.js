import {FORM_NAME, LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS} from './constants';
import * as api from '../../api';
import LocalStorage from 'localStorage';
import {reset} from 'redux-form'

export const login = ({credentials, dispatch}) => {

    dispatch({
        type: LOGIN_REQUEST,
    });

    return api.login(credentials)
        .then(response => {

            const token = response.data;

            // Save token and user id to local storage
            try {
                LocalStorage.setItem("token", token.id);
                LocalStorage.setItem("userId", token.userId);
            } catch (e) {
                dispatch({
                    type: LOGIN_ERROR,
                    message: 'Impossible to store user credentials. Please contact support for further information.',
                });
            }

            dispatch({
                type: LOGIN_SUCCESS,
                response: {...response, token: response.id},
            });


            //reset login form
            reset(FORM_NAME);
        })
        .catch(error => {

            dispatch({
                type: LOGIN_ERROR,
                message: error.message || 'Ops... Something went wrong during your authentication.',
            })
        })
};