import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
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
                    <NavLink to = {'/profile/'+u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width={100}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)}>Follow</button> :
                        <button onClick={() =>


                            props.follow(u.id)

                        }>Unfollow</button>}

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