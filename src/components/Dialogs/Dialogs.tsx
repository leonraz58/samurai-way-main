import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";





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

    let dialogsElements = dialogsData.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = messagesData.map(m => <Message message={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {/*<DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/*<Message message={messagesData[0].message}/>*/}
                {/*<Message message={messagesData[1].message}/>*/}
                {messagesElements}
            </div>
        </div>

    )
}