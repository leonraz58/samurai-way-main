import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from "react";
import styles from "./users.module.css";
import {Users} from "./Users";
import preloader from '../../assets/images/preloader.gif'
import {Preloader} from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component<UsersContainerType> {
    // constructor(props: UsersContainerType) {
    //     super(props);
    //
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then((response)=> {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response)=> {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount = {this.props.totalUsersCount}
                   pageSize = {this.props.pageSize}
                   currentPage = {this.props.currentPage}
                   onPageChanged = {this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
            />
        </>
    }
}

export default UsersAPIComponent