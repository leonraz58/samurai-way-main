import {UsersContainerType} from "./UsersContainer";

export const Users = (props: UsersContainerType) => {
    return <div>USERS WILL BE HERE
        <div>{props.users.map(u=><div key={u.id}>
            <span>
                <div>---img---</div>
                <div>
                    {u.followed ? <button onClick={()=>props.unfollow(u.id)}>Follow</button> :
                        <button onClick={()=>props.follow(u.id)}>Unfollow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
                _
            </span>

        </div>)}


        </div>
    </div>
}