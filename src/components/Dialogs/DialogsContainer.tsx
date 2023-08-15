import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsTypes,
    dialogsPageType,
    dialogsType,
    messagesType, profilePageType,
    sendMessageAC,
    updateNewMessageBodyAC
} from "../../redux/state";
import {ChangeEvent} from "react";
import {Dialogs} from "./Dialogs";
import {EmptyObject, Store} from "redux";





type DialogsPropsType = {
    //dialogsPageState: dialogsPageType
    //dispatch: (action: ActionsTypes) => void
    store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}