import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfileAC} from "../../redux/state";

class ProfileContainer extends React.Component<any,any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile: setUserProfileAC}) (ProfileContainer)