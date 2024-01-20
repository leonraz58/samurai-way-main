import {UsersContainerType} from "./UsersContainerUnused";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from "react";
import styles from "./users.module.css";
import {Users} from "./Users";
import preloader from '../../assets/images/preloader.gif'
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component<UsersContainerType> {
    // constructor(props: UsersContainerType) {
    //     super(props);
    //
    // }
    componentDidMount() {
        this.props.toggleIsFetching(true)
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
                .then((data)=> {
                    this.props.toggleIsFetching(false)
                    this.props.setUsers(data.items)
                    this.props.setTotalUsersCount(data.totalCount)
                })
        }
    }
    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then((data)=> {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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

export default UsersContainer