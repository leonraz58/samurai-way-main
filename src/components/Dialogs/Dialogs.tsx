import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: string
}
const DialogsItem = (props: DialogsItemPropsType) => {
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}
const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

type DialogsPropsType = {}
export const Dialogs = (Props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={"Димыч"} id={'1'}/>
                <DialogsItem name={"Андрей"} id={'2'}/>
                <DialogsItem name={"Вася"} id={'3'}/>

            </div>
            <div className={s.messages}>
                <Message message={'1st message'}/>
                <Message message={'2nd message'}/>
            </div>
        </div>

    )
}