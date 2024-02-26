import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

type PropsType = {
    login: string | null
    isAuth: boolean
    logoutTC: () => void
}
export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img src="https://dynamic.placementindia.com/recruiter_comp_logo/309213.png" alt="logo"/>
        <div className={s.loginBlock}>
            {props.isAuth&&'вы залогинены '}
            {props.isAuth
            ?<div>{props.login} <button onClick={props.logoutTC}>Logout</button></div>
            : <NavLink to={'/login'}>Login</NavLink>
            }

        </div>
        </header>
    )
}