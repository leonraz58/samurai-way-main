import {postType, profilePageType} from "./state";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

const initialState = {
    posts: [
        {id: 1, message: 'Dimych', likesCount: 3},
        {id: 2, message: 'Andrew', likesCount: 4},
        {id: 3, message: 'Vasya', likesCount: 2},
    ],
    newPostText: 'ololo',
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
        }}
}
export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes):profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: postType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }

            return {...state, posts:[newPost,...state.posts],newPostText: ''};
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.profile}
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

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileACType


export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}
export const setUserProfileAC = (profile: UserProfileType) => {
    return {
        type: "SET-USER-PROFILE", profile
    } as const
}

export type SetUserProfileACType = ReturnType<typeof setUserProfileAC>
export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then((response)=> {
            dispatch(setUserProfileAC(response.data))
        })
}


