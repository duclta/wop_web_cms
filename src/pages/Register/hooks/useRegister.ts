import { useForm } from "react-hook-form";
import { RegisterInput, useUserState } from '@/models';
import { useCallback } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { routerPaths } from "@/routers";

export const useRegister = () => {
    const useRegisterForm = useForm();
    const toast = useToast();
    const history = useHistory();

    const { commands } = useUserState();

    const handleSubmitRegisterForm = useCallback(() => {
        return useRegisterForm.handleSubmit(async (data: RegisterInput) => {
            try {
                await commands.requestRegister(data);
                toast({
                    title: "Register successfully",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
                setTimeout(() => {
                    history.push(routerPaths.login)
                })
            } catch (error) {
                toast({
                    title: "Username already exists",
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                });
            }
        })
    }, []);

    return {
        form: {
            registerForm: {
                hook: useRegisterForm,
                state: {
                    isSubmitting: useRegisterForm.formState.isSubmitting
                },
                methods: {
                    handleSubmitRegisterForm
                }
            }
        }
    }
}