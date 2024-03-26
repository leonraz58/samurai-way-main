import {addPostAC, deletePostAC, profileReducer} from "./profile-reducer";

test('length of posts should be incremented', () => {
    //1. test data
    let action = addPostAC("it-kamasutra.com")
    const state = {
        posts: [
            {id: 1, message: 'Dimych', likesCount: 3},
            {id: 2, message: 'Andrew', likesCount: 4},
            {id: 3, message: 'Vasya', likesCount: 2},
        ],
        profile: {   userId: 2,
            lookingForAJob: true,
            lookingForAJobDescription: 'lookingForAJobDescription',
            fullName: 'fullName',
            contacts: {
                github: 'github',
                vk: 'vk',
                facebook: 'facebook',
                instagram: 'instagram',
                twitter: 'twitter',
                website: 'website',
                youtube: 'youtube',
            },
            photos: {
                small: undefined,
                large: undefined,
            },
            aboutMe: 'no info yet'
        },
        status: ''
    }
    //2. action
    let newState = profileReducer(state, action)

    //3 expectation
    expect(newState.posts.length).toBe(4)
    expect(newState.posts[0].message).toBe("it-kamasutra.com")
});

test('after deleting length of messages should decrement', () => {
    //1. test data
    let action = deletePostAC(1)
    const state = {
        posts: [
            {id: 1, message: 'Dimych', likesCount: 3},
            {id: 2, message: 'Andrew', likesCount: 4},
            {id: 3, message: 'Vasya', likesCount: 2},
        ],
        profile: {   userId: 2,
            lookingForAJob: true,
            lookingForAJobDescription: 'lookingForAJobDescription',
            fullName: 'fullName',
            contacts: {
                github: 'github',
                vk: 'vk',
                facebook: 'facebook',
                instagram: 'instagram',
                twitter: 'twitter',
                website: 'website',
                youtube: 'youtube',
            },
            photos: {
                small: undefined,
                large: undefined,
            },
            aboutMe: 'no info yet'
        },
        status: ''
    }
    //2. action
    let newState = profileReducer(state, action)

    //3 expectation
    expect(newState.posts.length).toBe(2)

});

test('1', () => {
    //1. test data
    let action = deletePostAC(1000)
    const state = {
        posts: [
            {id: 1, message: 'Dimych', likesCount: 3},
            {id: 2, message: 'Andrew', likesCount: 4},
            {id: 3, message: 'Vasya', likesCount: 2},
        ],
        profile: {   userId: 2,
            lookingForAJob: true,
            lookingForAJobDescription: 'lookingForAJobDescription',
            fullName: 'fullName',
            contacts: {
                github: 'github',
                vk: 'vk',
                facebook: 'facebook',
                instagram: 'instagram',
                twitter: 'twitter',
                website: 'website',
                youtube: 'youtube',
            },
            photos: {
                small: undefined,
                large: undefined,
            },
            aboutMe: 'no info yet'
        },
        status: ''
    }
    //2. action
    let newState = profileReducer(state, action)

    //3 expectation
    expect(newState.posts.length).toBe(3)

});
