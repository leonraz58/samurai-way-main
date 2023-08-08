import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./redux/state";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)