import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>my posts
            <div>
                <textarea></textarea>
                <button>addpost</button>
            </div>
            <div className={s.posts}>
                <Post message={'Hi'}/>
                <Post message={'Yo'}/>

            </div>
        </div>
    )
}