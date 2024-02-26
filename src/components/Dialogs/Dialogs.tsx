import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {

    dialogsPageType,
    dialogsType,
    messagesType,


} from "../../redux/state";
import React, {ChangeEvent} from "react";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/preloader/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: dialogsPageType
    isAuth: boolean
    //dialogsPageState: dialogsPageType
    //dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage

    let dialogsElements = props.dialogsPage.dialogs.map(dialog => <DialogsItem name={dialog.name} id={dialog.id}/>)

    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)
    //let newMessageBody = props.dialogsPage.newMessageBody
    // let onSendMessageClick = () => {
    //     props.sendMessage()
    // }
    //
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.target.value
    //     props.updateNewMessageBody(body)
    //     //props.dispatch(updateNewMessageBodyAC(body))
    // }

    const addNewMessage = (values: AddMessageFormDataType) => {
        alert(values.newMessageBody)
        props.sendMessage(values.newMessageBody)

    }

    alert(props.isAuth)
    if (props.isAuth === false) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type AddMessageFormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50)

const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
                validate={[required, maxLength50]}
                />
                {/*<textarea*/}
                {/*    value={newMessageBody}*/}
                {/*    placeholder={"Enter your message"}*/}
                {/*    onChange={onNewMessageChange}*/}
                {/*></textarea>*/}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormDataType>({form: "dialogAddMessageForm"}) (AddMessageForm)
