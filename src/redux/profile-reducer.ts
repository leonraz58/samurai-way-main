import {postType, profilePageType} from "./state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

const initialState = {
    posts: [
        {id: 1, message: 'Dimych', likesCount: 3},
        {id: 2, message: 'Andrew', likesCount: 4},
        {id: 3, message: 'Vasya', likesCount: 2},
    ],
    profile: {   userId: 2,
        lookingForAJob: true,
        lookingForAJobDescription: 'lookingForAJobDescription',
        fullName: 'fullName',
        contacts: {
            github: 'github',
            vk: 'vk',
            facebook: 'facebook',
            instagram: 'instagram',
            twitter: 'twitter',
            website: 'website',
            youtube: 'youtube',
        },
        photos: {
            small: undefined,
            large: undefined,
        }},
    status: ''
}
export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes):profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: postType = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            }

            return {...state, posts:[newPost,...state.posts]};
        }
        // case "UPDATE-NEW-POST-TEXT": {
        //     let stateCopy = {...state}
        //     stateCopy.newPostText = action.newText
        //     return stateCopy
        // }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
        }
        case "SET-STATUS": {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export type UserProfileType = {
    userId: number;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    contacts: {
        github: string;
        vk: string;
        facebook: string;
        instagram: string;
        twitter: string;
        website: string;
        youtube: string;
    };
    photos: {
        small: string | undefined;
        large: string | undefined;
    };
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

type AddPostActionType = ReturnType<typeof addPostAC>
//type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ActionsTypes = AddPostActionType
    //| UpdateNewPostTextActionType
    | SetUserProfileACType | SetStatusACType


// export const updateNewPostTextAC = (text: string) => {
//     return {
//         type: "UPDATE-NEW-POST-TEXT",
//         newText: text
//     } as const
// }
export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE", profile
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: "SET-STATUS",
        status
    } as const
}
type SetStatusACType = ReturnType<typeof setStatusAC>


export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then((response)=> {
            dispatch(setUserProfileAC(response.data))
        })
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((response)=> {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    console.log('updateStatusTC')
    profileAPI.updateStatus(status)
        .then((response)=> {
            if (response.data.resultCode === 0 ){
                //debugger
                console.log('dispatch(setStatusAC(response.data.message)) ' + response.data)
                //dispatch(setStatusAC(response.data.message))
                dispatch(setStatusAC(status))
            }
        })
}