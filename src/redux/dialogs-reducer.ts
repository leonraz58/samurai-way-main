import {ActionsTypes, dialogsPageType, dialogsType, postType} from "./state";

const initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Vasya'},
    ],
        messages: [
    {id: 1, message: '1st message'},
    {id: 2, message: '2nd message'},
    {id: 3, message: '3rd message'},
],
    newMessageBody: ''
}
export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes):dialogsPageType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            //stateCopy.newMessageBody = action.body
            return {...state, newMessageBody: action.body};
            //return stateCopy
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            //stateCopy.newMessageBody = ''
            //stateCopy.messages.push({id: 6, message: body})
            //return stateCopy
            return {...state, messages: [...state.messages, {id: 6, message: body}], newMessageBody: ''};
        default:
            return state
    }
}





