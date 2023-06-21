import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img width={200}
                     src="https://tricksbystg.org/wp-content/uploads/2017/10/rainbow_background-wallpaper-2560x1600.jpg"
                     alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar+description
            </div>

        </div>
    )
}