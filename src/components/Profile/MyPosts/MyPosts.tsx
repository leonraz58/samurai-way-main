import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>addpost</button></div>
            </div>
            <div className={s.posts}>
                <Post message={'Hi'}/>
                <Post message={'Yo'}/>

            </div>
        </div>
    )
}