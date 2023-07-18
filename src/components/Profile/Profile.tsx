import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postType} from "../../redux/state";



type ProfilePropsType = {
    posts: postType[]
    addPost: (newPostMessage: string) => void
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                    addPost={props.addPost}
            />

        </div>
    )
}