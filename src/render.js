import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {updateQuantityElement} from "./Redux/Redux-store"
import {updategotCurrency} from "./Redux/Redux-store"
import {updateQuantityCurrency} from "./Redux/Redux-store"
import{allValuteChek} from "./Redux/Redux-store"
import{allValute} from "./Redux/Redux-store"


export let rerenderTree = (state) =>{
  const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App state={state} updateQuantityElement={updateQuantityElement} updategotCurrency={updategotCurrency} updateQuantityCurrency={updateQuantityCurrency} allValuteChek={allValuteChek} allValute={allValute} />
  </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
}


