import { RegisterInput, useAttributeState, useUserState } from "@/models";
import { routerPaths } from "@/routers";
import { CreateAttributeReq } from "@/services";
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const useAttributeCreatePage = () => {
    const useCreateAttributeForm = useForm();
    const toast = useToast();
    const history = useHistory();

    const { commands } = useAttributeState();

    const handleSubmitCreateAttributeForm = useCallback(() => {
        return useCreateAttributeForm.handleSubmit(async (data: CreateAttributeReq) => {
            try {
                await commands.createAttribute(data);
                toast({
                    title: "Create attribute successfully",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
                history.push(routerPaths.attributes)
            } catch (error) {
                toast({
                    title: "Attribute name already exists",
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                });
            }
        })
    }, []);

    return {
        form: {
            createAttributeForm: {
                hook: useCreateAttributeForm,
                state: {
                    isSubmitting: useCreateAttributeForm.formState.isSubmitting
                },
                methods: {
                    handleSubmitCreateAttributeForm
                }
            }
        }
    }
}