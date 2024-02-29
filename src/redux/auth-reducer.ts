import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthStateType = {
    userId: string | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
export const authReducer = (state: AuthStateType = initialState, action: AuthActionTypes):AuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.data
            }
        }
        case "SET_AUTH":{
            return {...state,isAuth:action.value}
        }
        default:
            return state
    }

}

export const setUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({type: "SET_USER_DATA", data: {userId, email, login, isAuth}}) as const
export const setAuth = (value:boolean) => ({type: "SET_AUTH", value}) as const

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    return authAPI.me()
        .then((res) => {
            let {id, email, login} = res.data.data
            dispatch(setUserData(id, email, login, true))
            dispatch(setAuth(true))
        })
}

export const loginTC = (login: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(login, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthUserDataTC())
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "some error"
                let action = stopSubmit("login",{_error: message})
                dispatch(action)
            }
        })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

type SetUserDataACType = ReturnType<typeof setUserData>
type SetAuthACType = ReturnType<typeof setAuth>
type AuthActionTypes = SetUserDataACType | SetAuthACType