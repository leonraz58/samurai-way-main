import React, {ChangeEvent, useRef} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../redux/state";




type MyPostsPropsType = {
    updateAddPostText: (text: string) => void
    addPost: ()=>void
    posts: postType[]

    newTextValue: string
    //dispatch: (action: ActionsTypes) => void
}
export const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = useRef<HTMLTextAreaElement>(null)
    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    const addPostHandler = () => {
            props.addPost()
            //props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

        let text = e.currentTarget.value
        props.updateAddPostText(e.currentTarget.value)
        //let action = updateNewPostTextAC(text)
        //props.dispatch(action)

    }

    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div><textarea ref={newPostElement}
                               value={props.newTextValue}
                               onChange={onPostChange}
                ></textarea></div>
                <div>
                    <button onClick={addPostHandler}>addpost</button>
                </div>
            </div>
            <div className={s.posts}>
                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                {postsElements}
            </div>
        </div>
    )
}