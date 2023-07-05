import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
}
export const DialogsItem = (props: DialogsItemPropsType) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}