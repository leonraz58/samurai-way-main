import React, {FC} from "react";
import {UserProfileType} from "../../../redux/profile-reducer";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

import {required} from "../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";

type ProfileDataFormPropsType = {
    profile: UserProfileType
}
const ProfileDataForm: FC<InjectedFormProps<UserProfileType, ProfileDataFormPropsType> & ProfileDataFormPropsType> = (props) => {
    console.log("error -> "+props.error)
    return <form onSubmit={props.handleSubmit}>

        <div>
            <button>save</button>
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
        </div>



        <div><b>Full Name: </b> {createField(Input, 'text', 'fullName', 'Enter you name', [required], null)}</div>

        <div><b>Looking for a job: </b> {createField(Input, 'checkbox', 'lookingForAJob', null, null, null)}</div>

        <div><b>My professional
            skills: </b> {createField(Textarea, 'text', 'lookingForAJobDescription', 'Enter you skills', null, null)}
        </div>

        <div><b>About me: </b> {createField(Textarea, 'text', 'aboutMe', 'Write about yourself', null, null)}</div>

        <div>
            <b>Contacts:</b> {Object.keys(props.profile.contacts)
            .map(key => {
                return (
                    <div key={key}>
                        <b>{key}: {createField(Textarea, 'text', 'contacts.' + key, null, null, null)}</b>
                    </div>
                )
            })}

        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<UserProfileType, ProfileDataFormPropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm