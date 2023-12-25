import {combineReducers, createStore, EmptyObject, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {ActionsTypes, dialogsPageType, profilePageType} from "./state";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof reducers>

export let store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes> = createStore(reducers);