import { useForm } from "react-hook-form";
import { useAuthState } from '@/models';
import { useCallback, useEffect, useRef } from "react";
import { routerPaths } from "@/routers";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

export const useAccountDropdown = () => {
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef<any>();
    const { queries, commands } = useAuthState();

    const handleBtnLogoutClick = useCallback(() => {
        onOpen();
    }, []);

    const handleBtnAcceptLogoutClick = useCallback(() => {
        commands.logout()
        onClose();
    }, []);

    const handleBtnMyAccountClick = useCallback(() => {
        history.push(routerPaths.myAccount)
    }, []);

    return {
        states: {
            alertDialogLogout: {
                cancelRef,
                isOpen,
            },
        },
        methods: {
            handleBtnLogoutClick,
            handleBtnMyAccountClick,
            alertDialogLogoutMethods: {
                onClose,
                onYes: handleBtnAcceptLogoutClick
            }
        }
    }
}