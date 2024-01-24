import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "1fa7a14d-5efe-4981-abcf-4a3887852221"
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}
