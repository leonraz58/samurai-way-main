import React from "react";
import s from './Post.module.css'

export type PostPropsType = {
    message:string
}

export const Post = (props:PostPropsType) => {
    return (
                <div className={s.item}>
                    <img
                        src="https://sun1-94.userapi.com/s/v1/ig2/UaBFbUGts-XFEukNLWWGmy-5LnQZ696TPRChy7JCMwgTS0zf862BEQPcLQZ7L2X3XPESQ9JiUz9pooocsmByI-Ho.jpg?size=281x281&quality=96&crop=0,12,281,281&ava=1"
                        alt="ava"/>
                    post1
                    <div><span>{props.message}</span></div>
                </div>
    )
}