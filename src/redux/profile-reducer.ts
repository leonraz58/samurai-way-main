import {ActionsTypes, postType, profilePageType} from "./state";

export const profileReducer = (state: profilePageType, action: ActionsTypes) => {
    if (action.type === "ADD-POST") {
        let newPost:postType = {
            id: 4,
            message: state.newPostText,
            likesCount: 0
        }
        state.posts.push(newPost)
        state.newPostText=''
    } else {
        if (action.type === "UPDATE-NEW-POST-TEXT") {
            state.newPostText = action.newText
        } else {

        }
    }

    return state
}