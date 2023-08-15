import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {
    ActionsTypes,
    addPostAC,
    dialogsPageType,
    postType,
    profilePageType,
    updateNewPostTextAC
} from "../../../redux/state";
import {MyPosts} from "./MyPosts";
import {EmptyObject, Store} from "redux";



type MyPostsPropsType = {
    //posts: postType[]
    //newTextValue: string
    //dispatch: (action: ActionsTypes) => void
    store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}
export const MyPostsContainer = (props: MyPostsPropsType) => {

    const addPostHandler = () => {
            //props.addPost()
            props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
            //props.updateAddPostText(e.currentTarget.value)
        //let text = e.currentTarget.value
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)

    }
    const state = props.store.getState()
    return (
        <MyPosts updateAddPostText={onPostChange}
                 addPost={addPostHandler}
                 posts={state.profilePage.posts}
                 newTextValue={state.profilePage.newPostText}
        />
    )
}