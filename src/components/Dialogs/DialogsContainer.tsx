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
import StoreContext from "../../StoreContext";





type DialogsPropsType = {
    //dialogsPageState: dialogsPageType
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}

export const DialogsContainer = (props: DialogsPropsType) => {


    return (
        <StoreContext.Consumer>

            {(store)=>{
                //let state = props.store.getState().dialogsPage

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }

                let onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                      sendMessage={onSendMessageClick}
                      dialogsPage={store.getState().dialogsPage}
            />}}
        </StoreContext.Consumer>
    )
}