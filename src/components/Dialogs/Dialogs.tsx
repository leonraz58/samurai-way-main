import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsPropsType = {}
export const Dialogs = (Props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Димыч</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Андрей</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Вася</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>123</div>
                <div className={s.message}>312</div>
            </div>
        </div>

    )
}