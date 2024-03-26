import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/profile-reducer";
import {ProfileStatus} from "./ProfileStatus";
import userPhoto from "./../../../assets/images/user.png"
import ProfileDataFormReduxForm from "./ProfileDataForm";
import ProfileDataForm from "./ProfileDataForm";


type PropsType = {
    profile: UserProfileType
    status: string
    updateStatusTC: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: any
}
export const ProfileInfo = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            console.log("файлов загружено " + e.target.files.length)
            props.savePhoto(e.target.files[0])
        }
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    const onSubmit = (formData: UserProfileType) => {
        props.saveProfile(formData).then((res: any) => {
                if (res.data.resultCode === 0) {
                    setEditMode(false)
                }
            }
        )
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
                    <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

                    <div><b>Status: </b><ProfileStatus status={props.status}
                                                       updateStatusTC={props.updateStatusTC}
                    /></div>

                    {editMode ? <ProfileDataForm profile={props.profile}
                                                          onSubmit={onSubmit}
                        initialValues={props.profile}
                        />
                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={goToEditMode}
                        />}
                </div>
            </div>
        )
    }
}


type ProfileDataPropsType = {
    profile: UserProfileType
    isOwner: boolean
    goToEditMode: any
}

const ProfileData = (props: ProfileDataPropsType) => {
    return <div>

        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>edit</button>
        </div>}

        <div><b>Full name:</b> {props.profile.fullName}</div>

        <div><b>Looking for a job: </b> {props.profile.lookingForAJob ? "yes" : "no"}</div>

        {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills</b> {props.profile.lookingForAJobDescription}
            </div>}

        <div><b>About me </b></div>
        {props.profile.aboutMe}

        <div>
            <b>Contacts</b> {Object.keys(props.profile.contacts).map(key => {
            const contactKey = key as unknown as ContactKeys

            return <Contact key={contactKey} contactTitle={contactKey}
                            contactValue={props.profile.contacts[contactKey]}/>
        })}

        </div>
    </div>
}

export type ContactKeys = 'github' | 'vk' | 'facebook' | 'instagram' | 'twitter' | 'website' | 'youtube'

type ContactPropsType = {
    contactTitle: string, contactValue: string
}
export const Contact = (props: ContactPropsType) => {
    return <div className={s.contact}><b>{props.contactTitle}</b>: {props.contactValue}</div>
}