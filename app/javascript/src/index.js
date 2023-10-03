import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import setupStore from './redux/store';
import './index.css';
import App from './App';

const store = setupStore();

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<App />);
