import {postType, profilePageType} from "./state";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";
import {AppStateType} from "./redux-store";
import {stopSubmit} from "redux-form";

const initialState = {
    posts: [
        {id: 1, message: 'Dimych', likesCount: 3},
        {id: 2, message: 'Andrew', likesCount: 4},
        {id: 3, message: 'Vasya', likesCount: 2},
    ],
    profile: {
        userId: 2,
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
        },
        aboutMe: 'no info yet',
    },
    status: ''
}
export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes): profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: postType = {
                id: 4,
                message: action.newPostText,
                likesCount: 0
            }

            return {...state, posts: [newPost, ...state.posts]};
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
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(p => p.id !== action.id)}
        }
        case "SAVE_PHOTO_SUCCESS": {
            return {...state, profile: {...state.profile, photos: action.photos}}
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
    },
    aboutMe: string;
}

export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}

export const deletePostAC = (id: number) => {
    return {
        type: "DELETE-POST",
        id
    } as const
}

export type PhotosType = {
    small: string, large: string
}

export const savePhotoSuccess = (photos: PhotosType) => {
    return {
        type: "SAVE_PHOTO_SUCCESS",
        photos
    } as const
}

type SavePhotoSuccessType = ReturnType<typeof savePhotoSuccess>

type AddPostActionType = ReturnType<typeof addPostAC>
//type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type DeletePostActionType = ReturnType<typeof deletePostAC>

export type ActionsTypes = AddPostActionType
    //| UpdateNewPostTextActionType
    | SetUserProfileACType | SetStatusACType | DeletePostActionType | SavePhotoSuccessType


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
        .then((response) => {
            dispatch(setUserProfileAC(response.data))
        })
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then((response) => {
            dispatch(setStatusAC(response.data))
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    console.log('updateStatusTC')
    profileAPI.updateStatus(status)
        .then((response) => {
            if (response.data.resultCode === 0) {
                //debugger
                console.log('dispatch(setStatusAC(response.data.message)) ' + response.data)
                //dispatch(setStatusAC(response.data.message))
                dispatch(setStatusAC(status))
            }
        })
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(savePhotoSuccess(res.data.data.photos))
    }
}

export const saveProfile = (profile: UserProfileType) => async (dispatch: any, getState: ()=>AppStateType) => {
    const userId = getState().auth.userId
    let res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        if (userId) {
            await dispatch(getUserProfileTC(userId))
        } else {

        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: res.data.messages[0]}))
        return res.data.messages[0]
    }
    return res
}