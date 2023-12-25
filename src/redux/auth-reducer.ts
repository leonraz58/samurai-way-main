
export type AuthStateType = {
    userId: string | null,
    email: string | null,
    login: string | null
}

const initialState = {
    userId: null,
    email: null,
    login: null
}
export const authReducer = (state: AuthStateType = initialState, action: AuthActionTypes):AuthStateType => {
    switch (action.type) {
        case "SET_USER_DATA": {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }

}

export const setUserData = (userId: string, email: string, login: string) => ({type: "SET_USER_DATA", data: {userId, email, login}}) as const
type SetUserDataACType = ReturnType<typeof setUserData>
type AuthActionTypes = SetUserDataACType