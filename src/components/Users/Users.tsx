import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {toggleFollowingProgressAC, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";


type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: number[]
    followTC: any
    unfollowTC: any
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = props.totalUsersCount / props.pageSize

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>USERS WILL BE HERE (C)
        {/*<button onClick={this.getUsers}>get</button>*/}

        <div>
            {pages.map(p => {
                return <span className={(props.currentPage === p) ? styles.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}
                >{p} </span>
            })}
        </div>


        <div>{props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width={100}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            //props.toggleFollowingProgress(true, u.id)
                            // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            //     {withCredentials: true,
                            //             headers: {
                            //             "API-KEY": "1fa7a14d-5efe-4981-abcf-4a3887852221"
                            //             }
                            //     })
                            // usersAPI.unfollow(u.id)
                            //     .then((response) => {
                            //
                            //         if (response.data.resultCode === 0) {
                            //             props.unfollow(u.id)
                            //             console.log('response.data.resultCode = ' + response.data.resultCode)
                            //         }
                            //         props.toggleFollowingProgress(false, u.id)
                            //     })
                            props.unfollowTC(u.id)
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            //props.toggleFollowingProgress(true, u.id)
                            // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            //     {withCredentials: true,
                            //         headers: {
                            //             "API-KEY": "1fa7a14d-5efe-4981-abcf-4a3887852221"
                            //         }
                            //     })
                            // usersAPI.follow(u.id)
                            //     .then((response) => {
                            //         if (response.data.resultCode === 0) {
                            //             console.log(response.data.resultCode)
                            //             props.follow(u.id)
                            //         }
                            //         props.toggleFollowingProgress(false, u.id)
                            //
                            //     })
                            props.followTC(u.id)

                        }
                        }>Follow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                _
            </span>

        </div>)}


        </div>
    </div>
}