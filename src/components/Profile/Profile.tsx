import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postDataType = {
    id: number
    message: string
    likesCount: number
}

type ProfilePropsType = {
    posts: postDataType[]
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>

        </div>
    )
}