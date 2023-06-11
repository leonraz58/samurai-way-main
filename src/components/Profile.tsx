import React from "react";
import s from './Profile.module.css'

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img width={200}
                     src="https://tricksbystg.org/wp-content/uploads/2017/10/rainbow_background-wallpaper-2560x1600.jpg"
                     alt=""/>
            </div>
            <div>
                avatar+description
            </div>
            <div>my posts
                <div>newpost</div>
                <div className={s.posts}>
                    <div className ={`${s.item} ${s.active}`}>post1</div>
                    <div>post2</div>
                    <div>post3</div>
                </div>
            </div>

        </div>
    )
}