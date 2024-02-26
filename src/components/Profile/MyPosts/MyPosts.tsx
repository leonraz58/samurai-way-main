import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../redux/state";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPropsType = {
    //updateAddPostText: (text: string) => void
    addPost: (newPostText: string)=>void
    posts: postType[]

    //newTextValue: string
    //dispatch: (action: ActionsTypes) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    //let newPostElement = useRef<HTMLTextAreaElement>(null)
    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = (values: NewPostFormDataType) => {
            props.addPost(values.newPostText)
    }

    // const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     props.updateAddPostText(e.currentTarget.value)
    // }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <AddNewPostFormRedux onSubmit={addPostHandler}/>
            <div className={s.posts}>
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                {postsElements}
            </div>
        </div>
    )
}

type NewPostFormDataType = {
    newPostText: string
}

const maxLength10 = maxLengthCreator(10)
const AddNewPostForm:React.FC<InjectedFormProps<NewPostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={"newPostText"} component={Textarea} placeholder={"Post message"}
            validate={[required, maxLength10]}
            />
            {/*    <textarea ref={newPostElement}*/}
            {/*               value={props.newTextValue}*/}
            {/*></textarea>*/}
            </div>
            <div>
                <button>addpost</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm<NewPostFormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)