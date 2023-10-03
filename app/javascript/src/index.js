import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import { apiSlice } from './redux/api/apiSlice';

store.dispatch(apiSlice.endpoints.getUsers.initiate());

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
