import {dialogsPageType, dialogsType, postType} from "./state";

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
]
}
export const dialogsReducer = (state: dialogsPageType = initialState, action: ActionsTypes):dialogsPageType => {

    switch (action.type) {
        //case "UPDATE-NEW-MESSAGE-BODY":
            //stateCopy.newMessageBody = action.body
         //   return {...state, newMessageBody: action.body};
            //return stateCopy

        case "SEND-MESSAGE":
            let body = action.newMessageBody
            //stateCopy.newMessageBody = ''
            //stateCopy.messages.push({id: 6, message: body})
            //return stateCopy
            return {...state, messages: [...state.messages, {id: 6, message: body}]};
        default:
            return state
    }
}

export const sendMessageAC = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE", newMessageBody
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

//type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>

type ActionsTypes =
    //UpdateNewMessageBodyActionType
    | SendMessageActionType


