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
import StoreContext from "../../../StoreContext";


type MyPostsPropsType = {
    //posts: postType[]
    //newTextValue: string
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}
export const MyPostsContainer = (props: MyPostsPropsType) => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPostHandler = () => {
                    //props.addPost()
                    store.dispatch(addPostAC())
                }

                const onPostChange = (text: string) => {
                    //props.updateAddPostText(e.currentTarget.value)
                    //let text = e.currentTarget.value
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)

                }
                const state = store.getState()
                return                <MyPosts updateAddPostText={onPostChange}
                         addPost={addPostHandler}
                         posts={store.getState().profilePage.posts}
                         newTextValue={store.getState().profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}