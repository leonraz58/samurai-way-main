import {ActionsTypes, dialogsPageType, dialogsType, postType} from "./state";

export const dialogsReducer = (state: dialogsPageType, action: ActionsTypes) => {

    if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
        state.newMessageBody = action.body
    } else {
        if (action.type === "SEND-MESSAGE") {
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
        }
        }


    return state
}