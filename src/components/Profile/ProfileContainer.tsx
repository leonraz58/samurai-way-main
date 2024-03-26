import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {
    getStatusTC,
    getUserProfileTC,
    savePhoto,
    saveProfile,
    updateStatusTC,
    UserProfileType
} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: UserProfileType
    status: string
    isAuth: boolean
    autorizedUserId: string | null
}
type MapDispatchPropsType = {
    getUserProfileTC: (userId: string) => void
    getStatusTC: (userId: string) => void
    updateStatusTC: (status: string) => void
    savePhoto: (file: File) => void
    saveProfile: any
}
type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            //userId = "29797"
            if (this.props.autorizedUserId) {
                userId = this.props.autorizedUserId
            } else {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            debugger
            this.refreshProfile()
        }

    }

    render() {
        // if (this.props.isAuth === false) return <Redirect to={'login'}/>
        return (
            <Profile profile={this.props.profile}
                     //isAuth={this.props.isAuth}
                     status={this.props.status}
                     updateStatusTC={this.props.updateStatusTC}
                     isOwner ={!this.props.match.params.userId}
                     savePhoto={this.props.savePhoto}
                     saveProfile={this.props.saveProfile}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    autorizedUserId: state.auth.userId
})

//let WithUrlDataContainerComponent = withRouter(ProfileContainer)

//export default withAuthRedirect(connect(mapStateToProps, {getUserProfileTC})(WithUrlDataContainerComponent))

export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC, savePhoto, saveProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)