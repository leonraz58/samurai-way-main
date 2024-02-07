import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {getStatusTC, getUserProfileTC, updateStatusTC, UserProfileType} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    //isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
}
type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "29797"
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        console.log(this.props.profile)
        // if (this.props.isAuth === false) return <Redirect to={'login'}/>
        return (
            <Profile profile={this.props.profile}
                     //isAuth={this.props.isAuth}
                     status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC}

            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
    //isAuth: state.auth.isAuth
})

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//export default withAuthRedirect(connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)