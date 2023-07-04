import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
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
type dialogsDataPropsType = {
    id: number,
    name: string
}
type messagesDataPropsType = {
    id: number,
    message: string
}
export const Dialogs = (Props: DialogsPropsType) => {
    let dialogsData:dialogsDataPropsType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Vasya'},
    ]

    let messagesData:messagesDataPropsType[] = [
        {id: 1, message: '1st message'},
        {id: 2, message: '2nd message'},
        {id: 3, message: '3rd message'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>

            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>

    )
}