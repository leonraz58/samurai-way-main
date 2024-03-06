import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {toggleFollowingProgressAC, UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {usersAPI} from "../../api/api";
import {Paginator} from "./Paginator";


type UserPropsType = {

    user: UsersType
    followTC: any
    unfollowTC: any
    followingInProgress: number[]
}

export const User = (props: UserPropsType) => {
    let u = props.user
    return <div>

        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width={100}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.unfollowTC(u.id)
                        }}>Unfollow</button> :
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
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

        </div>


    </div>
}