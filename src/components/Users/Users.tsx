import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

export const Users = (props: UsersContainerType) => {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response)=> {
            props.setUsers(response.data.items)
        })

    return <div>USERS WILL BE HERE

        <div>{props.users.map(u=><div key={u.id}>
            <span>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width={100}/>
                    </div>
                <div>
                    {u.followed ? <button onClick={()=>props.unfollow(u.id)}>Follow</button> :
                        <button onClick={()=>props.follow(u.id)}>Unfollow</button>}

                </div>
            </span>
            <span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
                _
            </span>

        </div>)}


        </div>
    </div>
}