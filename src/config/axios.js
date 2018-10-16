import axios from 'axios'
import * as ROUTES from '../config/routes'
import {push} from 'connected-react-router'
import LocalStorage from 'localStorage'

export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: `${API_BASE_URL}/`,
    headers: {}
});

export const setupInterceptors = (store) => {

    axiosInstance.interceptors.request.use(config => {

        const token = LocalStorage.getItem('accessToken');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    });

    axiosInstance.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.response.status === 401) {
            store.dispatch(push(ROUTES.HOME));
        }

        // Do something with response error
        return Promise.reject(error);
    });
};

export default axiosInstance