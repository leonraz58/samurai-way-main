import {UsersContainerType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from "react";

class UsersC extends React.Component<UsersContainerType> {

    // constructor(props: UsersContainerType) {
    //     super(props);
    //
    // }
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((response)=> {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    getUsers = ()=>{

    }
    render() {
        return <div>USERS WILL BE HERE (C)
            {/*<button onClick={this.getUsers}>get</button>*/}
            <div>{this.props.users.map(u=><div key={u.id}>
            <span>
                <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" width={100}/>
                    </div>
                <div>
                    {u.followed ? <button onClick={()=>this.props.unfollow(u.id)}>Follow</button> :
                        <button onClick={()=>this.props.follow(u.id)}>Unfollow</button>}

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
}

export default UsersC