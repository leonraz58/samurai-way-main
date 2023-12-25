import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {AuthStateType, setUserData} from "../../redux/auth-reducer";
import axios from "axios";

type MapStateToPropsType= {
//    isLogedIn:boolean
    login:string | null
}

type MapDispatchToPropsType = {
    setUserData:(userId: string, email: string, login: string)=>void
//    setLogedIn:(value:boolean)=>void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
            .then((res)=>{
                //debugger
                let {id, email, login} = res.data.data
                this.props.setUserData(id, email, login)
      //          this.props.setLogedIn(true)
            })
    }
    render(){
        return <Header login={this.props.login}/>

    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType =>({login:state.auth.login})

export default connect(mapStateToProps,{setUserData})(HeaderContainer)