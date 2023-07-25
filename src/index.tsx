import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {state, stateType, subscribe, updateAddPostText} from "./redux/state";
import App from "./App";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} updateAddPostText={updateAddPostText} />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

subscribe(rerenderEntireTree)