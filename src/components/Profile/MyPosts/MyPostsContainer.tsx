import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, addPostAC, postType, updateNewPostTextAC} from "../../../redux/state";
import {MyPosts} from "./MyPosts";



type MyPostsPropsType = {
    posts: postType[]
    newTextValue: string
    dispatch: (action: ActionsTypes) => void
}
export const MyPostsContainer = (props: MyPostsPropsType) => {

//    let newPostElement = useRef<HTMLTextAreaElement>(null)
//    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = () => {
            //props.addPost()
            props.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
            //props.updateAddPostText(e.currentTarget.value)
        //let text = e.currentTarget.value
        let action = updateNewPostTextAC(text)
        props.dispatch(action)

    }

    return (
        <MyPosts updateAddPostText={onPostChange}
                 addPost={addPostHandler}
                 posts={props.posts}
                 newTextValue={props.newTextValue}
        />
    )
}