import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from "react";
import styles from "./users.module.css";

class UsersC extends React.Component<UsersContainerType> {

    // constructor(props: UsersContainerType) {
    //     super(props);
    //
    // }
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response)=> {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }
    getUsers = ()=>{    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response)=> {
                this.props.setUsers(response.data.items)
            })
    }
    render() {

        let pagesCount = this.props.totalUsersCount / this.props.pageSize

        let pages = []
        for (let i = 1; i <= pagesCount ; i++) {
            pages.push(i)
        }

        return <div>USERS WILL BE HERE (C)
            {/*<button onClick={this.getUsers}>get</button>*/}

            <div>
                {pages.map(p=>{
                    return <span className={(this.props.currentPage === p) ? styles.selectedPage : ''}
                    onClick={()=>{this.onPageChanged(p)}}
                    >{p} </span>
                })}
            </div>


            <div>{this.props.users.map(u=><div key={u.id}>
            <span>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width={100}/>
                    </div>
                <div>
                    {u.followed ? <button onClick={()=>this.props.unfollow(u.id)}>Follow</button> :
                        <button onClick={()=>this.props.follow(u.id)}>Unfollow</button>}

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
}

export default UsersC