import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store.js';
import {setupInterceptors} from './config/axios';
import App from './containers/App/index';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

// interceptors for not authorized requests
setupInterceptors(store);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
