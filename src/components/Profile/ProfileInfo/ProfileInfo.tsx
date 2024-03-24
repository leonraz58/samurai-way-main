import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {updateStatusTC, UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "./../../../assets/images/user.png"

type PropsType = {
    profile: UserProfileType
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}
export const ProfileInfo = (props: PropsType) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log("файлов загружено " + e.target.files.length)
            props.savePhoto(e.target.files[0])
        }

    }

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
                    <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    <div><ProfileStatus status={props.status}
                                        updateStatusTC={props.updateStatusTC}
                    /></div>
                </div>

            </div>
        )
    }


}