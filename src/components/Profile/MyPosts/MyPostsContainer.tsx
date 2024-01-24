import s from './MyPosts.module.css'
import {


    dialogsPageType,
    postType,
    profilePageType,

} from "../../../redux/state";
import {MyPosts} from "./MyPosts";
import {Dispatch, EmptyObject, Store} from "redux";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    //posts: postType[]
    //newTextValue: string
    //dispatch: (action: ActionsTypes) => void
    //store: Store<EmptyObject & { dialogsPage: dialogsPageType; profilePage: profilePageType }, ActionsTypes>,
}
// export const MyPostsContainer = (props: MyPostsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const addPostHandler = () => {
//                     //props.addPost()
//                     store.dispatch(addPostAC())
//                 }
//                 const onPostChange = (text: string) => {
//                     //props.updateAddPostText(e.currentTarget.value)
//                     //let text = e.currentTarget.value
//                     let action = updateNewPostTextAC(text)
//                     store.dispatch(action)
//                 }
//                 const state = store.getState()
//                 return                <MyPosts updateAddPostText={onPostChange}
//                          addPost={addPostHandler}
//                          posts={store.getState().profilePage.posts}
//                          newTextValue={store.getState().profilePage.newPostText}
//                 />
//             }}
//         </StoreContext.Consumer>
//     )
// }

type MapStatePropsType = {
    posts: postType[]
    newTextValue: string
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newTextValue: state.profilePage.newPostText
    }
}

type MapDispatchPropsType = {
    updateAddPostText: (text: string) => void,
    addPost: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateAddPostText: (text: string) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)