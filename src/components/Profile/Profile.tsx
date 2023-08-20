import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, dialogsPageType, postType, profilePageType} from "../../redux/state";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {EmptyObject, Store} from "redux";



type ProfilePropsType = {
    //posts: postType[]
    //addPost: () => void
    //newTextValue: string
    //updateAddPostText: any
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer   //store={props.store}
                //posts={props.posts}
                     //newTextValue={props.newTextValue}
                        //dispatch={props.dispatch}
            />

        </div>
    )
}