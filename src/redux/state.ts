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

export type stateType = {
    profilePage: {
        posts: postType[]
    }
    dialogsPage: {
        dialogs: dialogsType[]
        messages: messagesType[]
    }
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Dimych', likesCount: 3},
            {id: 2, message: 'Andrew', likesCount: 4},
            {id: 3, message: 'Vasya', likesCount: 2},
        ],
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
}