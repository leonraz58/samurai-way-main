import React from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";

type PropsType = {
    profile: UserProfileType
}
export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <div>no profile</div>
    } else {
        return (
            <div>
                <div>
                    <img width={200}
                         src="https://tricksbystg.org/wp-content/uploads/2017/10/rainbow_background-wallpaper-2560x1600.jpg"
                         alt=""/>
                </div>
                <div className={s.descriptionBlock}>
                    avatar+description
                    <div>{props.profile.fullName}</div>
                    <img src={props.profile.photos.large} alt=""/>
                    <div><ProfileStatus status={'This is my status'}/></div>
                </div>

            </div>
        )
    }


}