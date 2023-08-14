import {ActionsTypes, postType, profilePageType} from "./state";

export const profileReducer = (state: profilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost:postType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText=''
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}