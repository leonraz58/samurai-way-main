import axios from "axios";
import React from "react";
import styles from "./users.module.css";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";
import {
    followAC, followTC, getUsersThunkCreator,
    setCurrentPageAC, setIsFetchingAC,
    setTotalUsersCountAC,
    setUsersAC, toggleFollowingProgressAC,
    unfollowAC, unfollowTC,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // if (this.props.users.length === 0) {
        //     usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //         .then((data) => {
        //             this.props.toggleIsFetching(false)
        //             this.props.setUsers(data.items)
        //             this.props.setTotalUsersCount(data.totalCount)
        //         })
        //}
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        // this.props.toggleIsFetching(true)
        // this.props.setCurrentPage(pageNumber)
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then((data) => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   followTC={this.props.followTC}
                   unfollowTC={this.props.unfollowTC}

            />
        </>
    }
}

export type UsersContainerType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = {
    users: UsersType[],
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsersThunkCreator: (pageSize: number, currentPage: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}
// export default connect(mapStateToProps,
//     {
//         follow: followAC,
//         unfollow: unfollowAC,
//         //setUsers: setUsersAC,
//         setCurrentPage: setCurrentPageAC,
//         //setTotalUsersCount: setTotalUsersCountAC,
//         toggleIsFetching: setIsFetchingAC,
//         toggleFollowingProgress: toggleFollowingProgressAC,
//         getUsersThunkCreator,
//         followTC,
//         unfollowTC
//     }
// )(UsersContainer)

export default compose<React.ComponentType>(connect(mapStateToProps,
        {
            follow: followAC,
            unfollow: unfollowAC,
            //setUsers: setUsersAC,
            setCurrentPage: setCurrentPageAC,
            //setTotalUsersCount: setTotalUsersCountAC,
            toggleIsFetching: setIsFetchingAC,
            toggleFollowingProgress: toggleFollowingProgressAC,
            getUsersThunkCreator,
            followTC,
            unfollowTC
        }
    ),
    withRouter,
    withAuthRedirect
)(UsersContainer)