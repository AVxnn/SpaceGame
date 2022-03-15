import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './App';
import { store } from "./store";
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import './shared/api/firebase'


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
