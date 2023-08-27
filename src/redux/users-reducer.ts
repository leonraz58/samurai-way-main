import {ActionsTypes, postType, profilePageType, sendMessageAC} from "./state";

type UsersStateType = {
    users: UsersType[]
}

type UsersType = {
    id: number,
    followed: boolean
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string
    }
}


const initialState = {
    users: [
        {id: 1, followed: true, fullName: 'Dimych', status: "i am a boss!!1", location: {city: "Minsk", country: "Belarus"}},
        {id: 2, followed: false, fullName: 'Sasha', status: "i am a boss too", location: {city: "Moscow", country: "Russia"}},
        {id: 3, followed: true, fullName: 'Andrew', status: "i am a boss toooo", location: {city: "Kiev", country: "Ukraine"}},

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

const followAC = (userId: number) => ({type: "FOLLOW", userId}) as const
const unfollowAC = (userId: number) => ({type: "UNFOLLOW", userId}) as const
const setUsersAC = (users: UsersType[]) => ({type: "SET_USERS", users}) as const

type FollowACType = ReturnType<typeof followAC>
type UnfollowACType = ReturnType<typeof unfollowAC>
type SetUsersACType = ReturnType<typeof setUsersAC>
type UsersActionTypes = FollowACType | UnfollowACType | SetUsersACType