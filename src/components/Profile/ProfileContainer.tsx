import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/state";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {UserProfileType} from "../../redux/profile-reducer";

type PathParamsType = {
    userId:string
}

type MapStateToPropsType = {
    profile:UserProfileType
}
type MapDispatchPropsType = {
    setUserProfile:(profile:UserProfileType)=>void
}
type PropsType =  RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2"
        }
        //        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response)=> {
                this.props.setUserProfile(response.data)

            })
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

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC}) (WithUrlDataContainerComponent)