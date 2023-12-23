import {ActionsTypes, postType, profilePageType, sendMessageAC, SetUserProfileACType} from "./state";

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

