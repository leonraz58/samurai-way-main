import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileTC, UserProfileType} from "../../redux/profile-reducer";
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profile:UserProfileType
}
type MapDispatchPropsType = {
    getUserProfileTC:(userId: string)=>void
}
type PropsType =  RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        //axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        // usersAPI.getProfile(userId)
        //     .then((response)=> {
        //         this.props.setUserProfile(response.data)
        //     })
        this.props.getUserProfileTC(userId)
    }

    render() {
        console.log(this.props.profile)
        return (
            <Profile profile = {this.props.profile}/>
            )
    }
}

let mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC}) (WithUrlDataContainerComponent)