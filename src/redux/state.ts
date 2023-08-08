export type StoreType = {
    _state: RootSTateType
    getState: ()=>RootSTateType
    _callSubscriber: ()=>void
    addPost: ()=>void
    updateAddPostText:(newText:string)=>void
    subscribe: (observer: ()=>void) => void
    dispatch: (action: ActionsTypes) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}

type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export const addPostAC = ():AddPostActionType => {
    return {
        type: "ADD-POST"
    }
}

export const updateNewPostTextAC = (text: string):UpdateNewPostTextActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: text
    }
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
            ]
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
            if (action.type = "UPDATE-NEW-POST-TEXT") {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
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
export type messagesType = {
    id: number,
    message: string
}
export type RootSTateType = {
    profilePage: {
        posts: postType[]
        newPostText: string
    }
    dialogsPage: {
        dialogs: dialogsType[]
        messages: messagesType[]
    }
}







