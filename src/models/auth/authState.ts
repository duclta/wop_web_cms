import { ACCESS_TOKEN, AuthPermissions, ROLE, USERNAME, USER_ID, USER_ROLE } from '@/constants';
import { routerPaths } from '@/routers';
import { createState, useState } from '@hookstate/core';
import services from '../../services';
import { fromLoginResToAuthModel } from './authMappers';
import { Auth, LoginInput } from './authType';

const initialState: Auth = {
    hasRequestLogin: false,
    isLogin: undefined,
    accessToken: undefined,
    id: undefined,
    username: undefined,
}
const authState = createState<Auth>(initialState);

export function useAuthState() {
    const state = useState<Auth>(authState);

    const requestLogin = async (input: LoginInput) => {
        const res = await services.auth.login(input);
        const authModel = fromLoginResToAuthModel(res);
        localStorage.setItem(ACCESS_TOKEN, authModel.accessToken);
        localStorage.setItem(USER_ID, authModel.id);
        localStorage.setItem(USERNAME, authModel.username);
        localStorage.setItem(USER_ROLE, authModel.userRole);
        localStorage.setItem(ROLE, AuthPermissions.USER);
        state.merge({ hasRequestLogin: true })
        login();
        window.location.replace(routerPaths.home);
    }

    const login = () => {
        state.merge({
            isLogin: true,
            accessToken: localStorage.getItem(ACCESS_TOKEN),
            id: localStorage.getItem(USER_ID),
            username: localStorage.getItem(USERNAME),
            role: localStorage.getItem(ROLE) as AuthPermissions
        })
    }

    const logout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(ROLE);
        window.location.replace(routerPaths.home);
    }

    return ({
        queries: {
            get state() {
                return state.value;
            },
        },
        commands: {
            requestLogin,
            login,
            logout,
        }
    })
}