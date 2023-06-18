import React from "react";
import s from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img width={200}
                     src="https://tricksbystg.org/wp-content/uploads/2017/10/rainbow_background-wallpaper-2560x1600.jpg"
                     alt=""/>
            </div>
            <div>
                avatar+description
            </div>
            <MyPosts/>

        </div>
    )
}