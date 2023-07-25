import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {stateType, updateAddPostText} from "./redux/state";


export const rerenderEntireTree = (state:stateType) => {
    ReactDOM.render(
        <App state={state} updateAddPostText={updateAddPostText} />,
        document.getElementById('root')
    );
}


