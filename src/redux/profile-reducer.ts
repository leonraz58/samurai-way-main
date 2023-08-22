import {ActionsTypes, postType, profilePageType} from "./state";

const initialState = {
    posts: [
        {id: 1, message: 'Dimych', likesCount: 3},
        {id: 2, message: 'Andrew', likesCount: 4},
        {id: 3, message: 'Vasya', likesCount: 2},
    ],
    newPostText: 'ololo'
}
export const profileReducer = (state: profilePageType = initialState, action: ActionsTypes):profilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: postType = {
                id: 4,
                message: state.newPostText,
                likesCount: 0
            }

            return {...state, posts:[newPost,...state.posts],newPostText: ''};
        }
        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}