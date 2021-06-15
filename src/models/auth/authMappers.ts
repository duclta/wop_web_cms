import { LoginRes } from '@/services'
import { Auth } from './authType'

export const fromLoginResToAuthModel = (res: LoginRes): Auth => {
    return {
        isLogin: true,
        accessToken: res.token,
        id: res.id,
        username: res.username,
        userRole: res.role
    }
}