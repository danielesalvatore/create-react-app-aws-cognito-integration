import LocalStorage from 'localStorage'

export const getAuthUser = (state) =>
    state.authentication;

export const getToken = () => {
    return LocalStorage.getItem("idToken");
};

export const isAuthenticated = () => !!getToken();

export const getAuthenticationError = (state) => {
    return state.authentication.error;
};

export const getAuthenticationIsFetching = (state) => {
    return state.authentication.isFetching;
};

export const hasAuthUser = (state) => {

    if (!getAuthUser(state) || typeof getAuthUser(state) !== "object") {
        return false;
    }

    let keys = Object.keys(getAuthUser(state));
    delete keys.error;

    return keys.length !== 0 && getAuthUser(state).constructor === Object;
};
