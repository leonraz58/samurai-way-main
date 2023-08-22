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
import {Dialogs} from "./Dialogs";
import {Dispatch, EmptyObject, Store} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";





type DialogsPropsType = {
    //dialogsPageState: dialogsPageType
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}

// export const DialogsContainer = (props: DialogsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {(store)=>{
//                 //let state = props.store.getState().dialogsPage
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageAC())
//                 }
//
//                 let onNewMessageChange = (body: string) => {
//                     store.dispatch(updateNewMessageBodyAC(body))
//                 }
//
//                 return <Dialogs updateNewMessageBody={onNewMessageChange}
//                       sendMessage={onSendMessageClick}
//                       dialogsPage={store.getState().dialogsPage}
//             />}}
//         </StoreContext.Consumer>
//     )
// }

type MapStatePropsType = {
    dialogsPage: dialogsPageType
}
let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void,
    sendMessage: () => void
}

export type DialogsContainerType = MapDispatchPropsType & MapStatePropsType
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)