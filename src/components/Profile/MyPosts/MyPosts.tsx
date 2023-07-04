import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type postDataType = {
    id: number
    message: string
    likesCount: number
}
export const MyPosts = () => {
    let posts: postDataType[] = [
        {id: 1, message: 'Dimych', likesCount: 3},
        {id: 2, message: 'Andrew', likesCount: 4},
        {id: 3, message: 'Vasya', likesCount: 2},
    ]

    let postsElements = posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>addpost</button></div>
            </div>
            <div className={s.posts}>
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                {postsElements}
            </div>
        </div>
    )
}