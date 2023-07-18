import React, {useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../redux/state";




type MyPostsPropsType = {
    posts: postType[]
}
export const MyPosts = (props:MyPostsPropsType) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }

    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div><button onClick={addPost}>addpost</button></div>
            </div>
            <div className={s.posts}>
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                {postsElements}
            </div>
        </div>
    )
}