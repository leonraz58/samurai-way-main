import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {toggleFollowingProgressAC, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    // users: UsersType[]
    // follow: (userId: number) => void
    // unfollow: (userId: number) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    // followingInProgress: number[]
    // followTC: any
    // unfollowTC: any
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = props.totalUsersCount / props.pageSize

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
            {pages.map(p => {
                return <span className={(props.currentPage === p) ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p} </span>
            })}
        </div>
}