import {Dispatch} from "redux";
import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthStateType = {
    userId: string | null,
    email: string | null,
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
export const authReducer = (state: AuthStateType = initialState, action: AuthActionTypes): AuthStateType => {
    switch (action.type) {
        case "AUTH/SET_USER_DATA": {
            return {
                ...state,
                ...action.data
            }
        }
        case "AUTH/SET_AUTH": {
            return {...state, isAuth: action.value}
        }
        case "AUTH/GET_CAPTCHA_URL_SUCCESS": {
            return {...state, captchaUrl: action.url}
        }
        default:
            return state
    }

}

export const setUserData = (userId: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: "AUTH/SET_USER_DATA",
    data: {userId, email, login, isAuth}
}) as const
export const setAuth = (value: boolean) => ({type: "AUTH/SET_AUTH", value}) as const

export const getCaptchaUrlSuccess = (url: string | null) => ({type: "AUTH/GET_CAPTCHA_URL_SUCCESS", url}) as const

type GetCaptchaUrlSuccess = ReturnType<typeof getCaptchaUrlSuccess>

export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let {id, email, login} = res.data.data
        dispatch(setUserData(id, email, login, true))
        dispatch(setAuth(true))
    }

}

export const loginTC = (login: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
    let res = await authAPI.login(login, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "some error"
        let action = stopSubmit("login", {_error: message})
        dispatch(action)
        if (res.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    let res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch) => {
    let res = await securityApi.getCaptchaUrl()
    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}



type SetUserDataACType = ReturnType<typeof setUserData>
type SetAuthACType = ReturnType<typeof setAuth>
type AuthActionTypes = SetUserDataACType | SetAuthACType | GetCaptchaUrlSuccess