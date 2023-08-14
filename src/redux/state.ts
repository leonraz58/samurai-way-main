export type StoreType = {
    _state: RootSTateType
    getState: ()=>RootSTateType
    _callSubscriber: ()=>void
    addPost: ()=>void
    updateAddPostText:(newText:string)=>void
    subscribe: (observer: ()=>void) => void
    dispatch: (action: ActionsTypes) => void
}
type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType

export const addPostAC = () => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Dimych', likesCount: 3},
                {id: 2, message: 'Andrew', likesCount: 4},
                {id: 3, message: 'Vasya', likesCount: 2},
            ],
            newPostText: 'ololo'
        },
        dialogsPage: {
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
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState(){
        return this._state;
    },
    addPost () {
        let newPost:postType = {
            id: 4,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber()
    },
    updateAddPostText (newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()
    },
    subscribe (observer: ()=>void) {
        this._callSubscriber = observer
    },
    dispatch(action) { //type 'ADD-POST'
        if (action.type === "ADD-POST") {
            let newPost:postType = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText=''
            this._callSubscriber()
        } else {
            if (action.type === "UPDATE-NEW-POST-TEXT") {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
            } else {
                if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
                    this._state.dialogsPage.newMessageBody = action.body
                    this._callSubscriber()
                } else {
                    if (action.type === "SEND-MESSAGE") {
                        let body = this._state.dialogsPage.newMessageBody
                        this._state.dialogsPage.newMessageBody = ''
                        this._state.dialogsPage.messages.push({id: 6, message: body})
                        this._callSubscriber()
                    }
                }
            }
        }
    }
}



export type postType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsType = {
    id: number,
    name: string
}
export type dialogsPageType = {
    dialogs: dialogsType[]
    messages: messagesType[]
    newMessageBody: string
}
export type messagesType = {
    id: number,
    message: string
}
export type RootSTateType = {
    profilePage: {
        posts: postType[]
        newPostText: string
    }
    dialogsPage: dialogsPageType
}







