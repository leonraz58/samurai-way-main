import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, postType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfilePropsType = {
    posts: postType[]
    //addPost: () => void
    newTextValue: string
    //updateAddPostText: any
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer posts={props.posts}
                     newTextValue={props.newTextValue}
                        dispatch={props.dispatch}
            />

        </div>
    )
}