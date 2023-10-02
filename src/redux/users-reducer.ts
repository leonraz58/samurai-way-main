import {ActionsTypes, postType, profilePageType, sendMessageAC} from "./state";

export type UsersStateType = {
    users: UsersType[]
}

export type UsersType = {
    id: number,
    followed: boolean
    name: string,
    status: string,
    photos: {
        small: string
    }
    // location: {
    //     city: string,
    //     country: string
    // }
}


const initialState = {
    users: [
        // {id: 1, followed: true, name: 'Dimych', status: "i am a boss!!1",},
        // {id: 2, followed: false, name: 'Sasha', status: "i am a boss too",},
        // {id: 3, followed: true, name: 'Andrew', status: "i am a boss toooo"},

    ],
    newPostText: 'ololo'
}
export const usersReducer = (state: UsersStateType = initialState, action: UsersActionTypes):UsersStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u=>{
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
export const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
export const setUsersAC = (users: UsersType[]) => ({type: "SET_USERS", users}) as const

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type UsersActionTypes = FollowACType | UnfollowACType | SetUsersACType