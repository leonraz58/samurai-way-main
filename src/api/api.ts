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
    //use profileAPI
    getProfile(userId: string){
        return profileAPI.getProfile(userId)
    },
}

export const profileAPI = {
    getProfile(userId: string){
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get('profile/status/'+ userId)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status:status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put("profile/photo", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    },
}
