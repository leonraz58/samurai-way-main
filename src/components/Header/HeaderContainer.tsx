import React from 'react';
import s from './Header.module.css'
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserDataTC, logoutTC, setAuth, setUserData} from "../../redux/auth-reducer";
import axios from "axios";
import {authAPI} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    //setUserData: (userId: string, email: string, login: string) => void
    getAuthUserDataTC: () => void
    setAuth: (value: boolean) => void
    logoutTC: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        //axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
        // authAPI.me()
        //     .then((res) => {
        //         //debugger
        //         let {id, email, login} = res.data.data
        //         this.props.setUserData(id, email, login)
        //         this.props.setAuth(true)
        //     })
        this.props.getAuthUserDataTC()
    }

    render() {
        return <Header login={this.props.login}
                       isAuth={this.props.isAuth}
                       logoutTC={this.props.logoutTC}
        />

    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserDataTC, setAuth, logoutTC})(HeaderContainer)