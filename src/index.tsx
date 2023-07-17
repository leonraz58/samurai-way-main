import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {postDataType} from "./components/Profile/Profile";

export type dialogsDataPropsType = {
    id: number,
    name: string
}
export type messagesDataPropsType = {
    id: number,
    message: string
}

let posts: postDataType[] = [
    {id: 1, message: 'Dimych', likesCount: 3},
    {id: 2, message: 'Andrew', likesCount: 4},
    {id: 3, message: 'Vasya', likesCount: 2},
]

let dialogsData:dialogsDataPropsType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Vasya'},
]

let messagesData:messagesDataPropsType[] = [
    {id: 1, message: '1st message'},
    {id: 2, message: '2nd message'},
    {id: 3, message: '3rd message'},
]



ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData} />,
  document.getElementById('root')
);