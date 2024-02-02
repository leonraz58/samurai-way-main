import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {

    dialogsPageType,
    dialogsType,
    messagesType, profilePageType,


} from "../../redux/state";
import {Dialogs} from "./Dialogs";
import {compose, Dispatch, EmptyObject, Store} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import React from "react";
import {getUserProfileTC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type DialogsPropsType = {
    //dialogsPageState: dialogsPageType
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}

type MapStatePropsType = {
    dialogsPage: dialogsPageType
    isAuth: boolean
}
let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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

//export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export const DialogsContainer = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(Dialogs)