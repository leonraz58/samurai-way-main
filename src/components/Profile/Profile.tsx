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
    //isAuth: boolean
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: any
}

export const Profile = (props:ProfilePropsType) => {
    //debugger
    //console.log(props)
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatusTC={props.updateStatusTC}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer   //store={props.store}
                //posts={props.posts}
                     //newTextValue={props.newTextValue}
                        //dispatch={props.dispatch}
            />

        </div>
    )
}