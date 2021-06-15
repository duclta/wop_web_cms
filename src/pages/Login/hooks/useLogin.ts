import { useForm } from "react-hook-form";
import { LoginInput, useAuthState } from '@/models';
import { useCallback } from "react";

export const useLogin = () => {
    const useLoginForm = useForm();
    const { commands } = useAuthState();

    const handleSubmitLoginForm = useCallback(() => {
        return useLoginForm.handleSubmit(async (data: LoginInput) => {
            await commands.requestLogin(data);
        })
    }, []);

    return {
        form: {
            loginForm: {
                hook: useLoginForm,
                state: {
                    isSubmitting: useLoginForm.formState.isSubmitting
                },
                methods: {
                    handleSubmitLoginForm
                }
            }
        }
    }
}