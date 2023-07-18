import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsType, messagesType} from "../../redux/state";





type DialogsPropsType = {
    dialogsPageState: {
        dialogs: dialogsType[]
        messages: messagesType[]
    }



}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPageState.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.dialogsPageState.messages.map(m => <Message message={m.message}/>)
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