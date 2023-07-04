import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postDataType = {
    id: number
    message: string
    likesCount: number
}
export const MyPosts = () => {
    let postsData: postDataType[] = [
        {id: 1, message: 'Dimych', likesCount: 3},
        {id: 2, message: 'Andrew', likesCount: 4},
        {id: 3, message: 'Vasya', likesCount: 2},
    ]
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>addpost</button></div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>

            </div>
        </div>
    )
}