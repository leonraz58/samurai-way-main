import {Dispatch} from "redux";
import {authAPI} from "../api/api";

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

export const setUserData = (userId: string, email: string, login: string) => ({type: "SET_USER_DATA", data: {userId, email, login}}) as const
export const setAuth = (value:boolean) => ({type: "SET_AUTH", value}) as const

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then((res) => {
            //debugger
            let {id, email, login} = res.data.data
            dispatch(setUserData(id, email, login))
            dispatch(setAuth(true))
        })
}
type SetUserDataACType = ReturnType<typeof setUserData>
type SetAuthACType = ReturnType<typeof setAuth>
type AuthActionTypes = SetUserDataACType | SetAuthACType