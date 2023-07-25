import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postType, updateAddPostText} from "../../redux/state";



type ProfilePropsType = {
    posts: postType[]
    addPost: () => void
    newTextValue: string
    updateAddPostText: any
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                    addPost={props.addPost}
                     newTextValue={props.newTextValue}
                     updateAddPostText={props.updateAddPostText}

            />

        </div>
    )
}