import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getUserProfileTC, UserProfileType} from "../../redux/profile-reducer";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamsType = {
    userId: string
}



type MapStateToPropsType = {
    profile: UserProfileType
    //isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
}
type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

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
       // if (this.props.isAuth === false) return <Redirect to={'login'}/>
        return (
            <Profile profile={this.props.profile}
        //             isAuth={this.props.isAuth}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    //isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent))
