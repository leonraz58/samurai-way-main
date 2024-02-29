import {getAuthUserDataTC} from "./auth-reducer";

type AppRStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}
export const appReducer = (state: AppRStateType = initialState, action: AppActionTypes):AppRStateType => {
    switch (action.type) {
        case "SET_INITIALIZED": {
            return {
                ...state,
                initialized: true
            }
        }

        default:
            return state
    }

}

export const setInitialized = () => ({type: "SET_INITIALIZED"}) as const

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataTC())
    promise.then(()=>{
        dispatch(setInitialized())
    })
}

type SetInitialized = ReturnType<typeof setInitialized>

type AppActionTypes = SetInitialized