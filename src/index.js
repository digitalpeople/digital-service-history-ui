import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import './index.css';
import App from './App';
import store from './store/store';
import * as serviceWorker from './serviceWorker';

axios.defaults.baseURL = 'http://localhost:9000';
const token = localStorage.getItem('userToken');
axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
