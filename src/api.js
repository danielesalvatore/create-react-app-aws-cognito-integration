import axios from './config/axios';
import {COGNITO_URL} from "./config";

export const logout = () => {
    return new Promise((resolve) => {
        resolve();
    });
};

export const fetchUserInfo = () => axios.get(`${COGNITO_URL}/oauth2/userInfo`);