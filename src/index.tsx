import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {store} from "./redux/state";
import App from "./App";


let rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             updateAddPostText={store.updateAddPostText.bind(store)}
             addPost={store.addPost.bind(store)}
        />,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)