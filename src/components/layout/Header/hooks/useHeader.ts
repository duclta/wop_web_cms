import { useAuthState, useUserState } from "@/models";
import { routerPaths } from "@/routers";
import { useHistory } from "react-router-dom";
import avatarDefault from "@/assets/images/avatar_default.svg";
import styles from "../css/header.module.css";

export const useHeader = (props: any) => {
    const history = useHistory();
    const { queries: authQueries, commands: authCommands } = useAuthState();
    const { queries: userQueries, commands: userCommands } = useUserState();

    const handleBtnLoginClick = () => {
        history.push(routerPaths.login);
    }

    return {
        state: {
            accountDropdown: {
                avatar: userQueries.state.profile ? userQueries.state.profile.avatar : avatarDefault
            },
            isLogoFullSize: false,
            isShowNavs: !authQueries.state.isLogin,
            isShowSearchBox: authQueries.state.isLogin,
            isShowAuthButtons: !authQueries.state.isLogin,
            isShowAccountButtons: authQueries.state.isLogin,
        },
        method: {
            handleBtnLoginClick,
        },
        styles,
    }
}