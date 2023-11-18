import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import rates from './Redux/Redux-store';
import state from './Redux/Redux-store';
import { rerenderTree } from './render';



rerenderTree(state);

