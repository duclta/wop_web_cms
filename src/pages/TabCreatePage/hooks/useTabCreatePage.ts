import { useTabState } from "@/models";
import { routerPaths } from "@/routers";
import { CreateTabReq } from "@/services";
import { useToast } from "@chakra-ui/react";
import { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export const useTabCreatePage = () => {
    const useCreateTabForm = useForm();
    const toast = useToast();
    const history = useHistory();

    const { commands } = useTabState();
    const refImage = useRef<any>();

    const handleSubmitCreateTabForm = useCallback(() => {
        return useCreateTabForm.handleSubmit(async (data: CreateTabReq) => {
            data.image = refImage.current.value;
            try {
                await commands.createTab(data);
                toast({
                    title: "Create tab successfully",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                });
                history.push(routerPaths.tabs)
            } catch (error) {
                toast({
                    title: "Tab name already exists",
                    status: "error",
                    duration: 1000,
                    isClosable: true,
                });
            }
        })
    }, []);

    return {
        states: {
            refImage,
        },
        form: {
            createTabForm: {
                hook: useCreateTabForm,
                state: {
                    isSubmitting: useCreateTabForm.formState.isSubmitting
                },
                methods: {
                    handleSubmitCreateTabForm
                }
            }
        }
    }
}