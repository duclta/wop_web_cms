import { useAuthState, useUserState } from '@/models';
import { useEffect } from "react";
import { ACCESS_TOKEN } from '@/constants';

export const useApp = () => {
    const { queries: authQueries, commands: authCommands } = useAuthState();
    const { queries: userQueries, commands: userCommands } = useUserState();


    useEffect(() => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (accessToken) {
            authCommands.login();
            userCommands.fetchUserDetails({ username: authQueries.state.username })
        }
    }, [])
}