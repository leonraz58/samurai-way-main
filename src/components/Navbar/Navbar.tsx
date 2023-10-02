import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

// let s = {
//     'nav': Navbar_nav__?????
//     'item': Navbar_item__?????
// }
export const Navbar = ()=>{
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a href="">News</a>
            </div>
            <div className={s.item}>
                <a href="">Music</a>
            </div>
            <div className={s.item}>
                <a href="">Settings</a>
            </div>
        </nav>
    )
}