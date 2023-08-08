import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, postType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: postType[]
    newTextValue: string
    dispatch: (action: ActionsTypes) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = () => {

            //props.addPost()
            props.dispatch({type: 'ADD-POST'})


    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            //props.updateAddPostText(e.currentTarget.value)
        let text = e.currentTarget.value
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
        console.log('jjj')
    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea ref={newPostElement}
                               value={props.newTextValue}
                               onChange={onPostChange}
                ></textarea></div>
                <div>
                    <button onClick={addPostHandler}>addpost</button>
                </div>
            </div>
            <div className={s.posts}>
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                {postsElements}
            </div>
        </div>
    )
}