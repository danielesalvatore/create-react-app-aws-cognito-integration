//import axios from './config/axios';
//export const login = ({username, password}) => axios.post('login', {username: username, password: password});

export const login = () => {
    return new Promise((resolve) => {
        resolve({
            data: {
                id: "dani-id",
                userId: "dani"
            }
        });
    });
};
export const logout = () => {
    return new Promise((resolve) => {
        resolve();
    });
};
