import React from 'react'
import {followAC, setUsersAC, unfollowAC, UsersStateType, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";
import {RootSTateType} from "../../redux/state";
import {AppStateType} from "../../redux/redux-store";
import UsersC from "./UsersС";

export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UsersType[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
        dispatch(followAC(userId))
    },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UsersType[]) => {
            dispatch(setUsersAC(users))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersC)