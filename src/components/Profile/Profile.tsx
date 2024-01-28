import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    //posts: postType[]
    //addPost: () => void
    //newTextValue: string
    //updateAddPostText: any
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
    profile: UserProfileType
    isAuth: boolean
}

export const Profile = (props:ProfilePropsType) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer   //store={props.store}
                //posts={props.posts}
                     //newTextValue={props.newTextValue}
                        //dispatch={props.dispatch}
            />

        </div>
    )
}