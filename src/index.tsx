import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {postDataType} from "./components/Profile/Profile";

let posts: postDataType[] = [
    {id: 1, message: 'Dimych', likesCount: 3},
    {id: 2, message: 'Andrew', likesCount: 4},
    {id: 3, message: 'Vasya', likesCount: 2},
]



ReactDOM.render(
    <App posts={posts} />,
  document.getElementById('root')
);