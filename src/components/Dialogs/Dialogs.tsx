import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    dialogsPageType,
    dialogsType,
    messagesType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/state";
import {ChangeEvent} from "react";





type DialogsPropsType = {
    dialogsPageState: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPageState.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.dialogsPageState.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.dialogsPageState.newMessageBody
    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(updateNewMessageBodyAC(body))
    }

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
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        placeholder={"Enter your message"}
                        onChange={onNewMessageChange}
                    ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>

    )
}