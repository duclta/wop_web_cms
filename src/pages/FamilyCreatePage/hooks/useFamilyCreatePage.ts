import { useFamilyState } from "@/models";
import { routerPaths } from "@/routers";
import { CreateFamilyReq } from "@/services";
import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const useFamilyCreatePage = () => {
    const useCreateFamilyForm = useForm();
    const toast = useToast();
    const history = useHistory();

    const { commands } = useFamilyState();

    const handleSubmitCreateFamilyForm = useCallback(() => {
        return useCreateFamilyForm.handleSubmit(async (data: CreateFamilyReq) => {
            try {
                await commands.createFamily(data);
                toast({
                    title: "Create family successfully",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
                history.push(routerPaths.families)
            } catch (error) {
                toast({
                    title: "Family name already exists",
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                });
            }
        })
    }, []);

    return {
        form: {
            createFamilyForm: {
                hook: useCreateFamilyForm,
                state: {
                    isSubmitting: useCreateFamilyForm.formState.isSubmitting
                },
                methods: {
                    handleSubmitCreateFamilyForm
                }
            }
        }
    }
}