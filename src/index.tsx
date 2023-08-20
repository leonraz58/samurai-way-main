import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from "./App";
import {store} from "./redux/redux-store";
import StoreContext from './StoreContext';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
        <App   // store={store}
            //state={store.getState()}
             //dispatch={store.dispatch.bind(store)}
        />
        </StoreContext.Provider>

            ,
        document.getElementById('root')
    );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree)